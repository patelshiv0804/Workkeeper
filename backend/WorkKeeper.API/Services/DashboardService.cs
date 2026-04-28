using WorkKeeper.API.DTOs;
using WorkKeeper.API.Repositories;
using WorkKeeper.API.Models;

namespace WorkKeeper.API.Services
{
    public interface IDashboardService
    {
        Task<DashboardResponseDto> GetDashboardDataAsync(int employeeId);
    }

    public class DashboardService : IDashboardService
    {
        private readonly IDashboardRepository _repository;

        public DashboardService(IDashboardRepository repository)
        {
            _repository = repository;
        }

        public async Task<DashboardResponseDto> GetDashboardDataAsync(int employeeId)
        {
            var response = new DashboardResponseDto();

            // 1. Employee Info
            var employee = await _repository.GetEmployeeWithDetailsAsync(employeeId);
            if (employee == null) return response;

            response.EmployeeInfo = new EmployeeInfoDto
            {
                Name = employee.Name,
                EmpId = employee.EmpCode, // Using employee_code
                Department = employee.Department?.Name ?? "N/A",
                Manager = employee.Manager != null ? $"{employee.Manager.FirstName} {employee.Manager.LastName}".Trim() : "N/A",
                Shift = employee.Shift?.Name ?? "N/A"
            };

            // 2. Today Presence
            var todayAttendances = await _repository.GetTodayAttendanceAsync(employeeId);
            if (todayAttendances.Any())
            {
                var firstInAtt = todayAttendances.First();
                var lastOutAtt = todayAttendances.Last();

                response.TodayPresence.FirstIn = firstInAtt.InTime?.ToString("hh:mm tt") ?? "--:--";
                response.TodayPresence.LastOut = lastOutAtt.OutTime?.ToString("hh:mm tt") ?? "--:--";

                // Calculate hours dynamically using in_time and out_time
                double totalHours = todayAttendances
                    .Where(a => a.InTime.HasValue && a.OutTime.HasValue)
                    .Sum(a => (a.OutTime.Value - a.InTime.Value).TotalHours);

                response.TodayPresence.TotalHours = $"{(int)totalHours:D2}:{(int)((totalHours % 1) * 60):D2}";

                // 3. Location Status
                var latest = todayAttendances.OrderByDescending(a => a.InTime).First();
                string loc = latest.WorkLocation.ToLower() == "office" ? "Office" : "WFH";
                response.LocationStatus.Status = loc;
                response.LocationStatus.Location = loc;
            }

            // 4. Leave Balance (Aggregated from row-per-type)
            var balances = await _repository.GetLeaveBalancesAsync(employeeId);
            foreach (var b in balances)
            {
                var type = b.LeaveType.ToLower();
                // Map privilege OR earned -> privilege
                if (type == "privilege" || type == "earned") response.LeaveBalance.Privilege = b.Remaining;
                // Map optional OR casual -> optional
                else if (type == "optional" || type == "casual") response.LeaveBalance.Optional = b.Remaining;
                // Map comp -> comp
                else if (type == "comp") response.LeaveBalance.Comp = b.Remaining;
                // Map lop -> lop
                else if (type == "lop") response.LeaveBalance.Lop = b.Remaining;
            }

            // 5. Weekly Attendance (Last 7 days)
            var today = DateTime.UtcNow.Date;
            var weekStart = today.AddDays(-6);
            var weeklyAtt = await _repository.GetWeeklyAttendanceAsync(employeeId, weekStart);
            for (int i = 0; i < 7; i++)
            {
                var date = weekStart.AddDays(i);
                var hours = weeklyAtt
                    .Where(a => a.Date.Date == date.Date && a.InTime.HasValue && a.OutTime.HasValue)
                    .Sum(a => (a.OutTime.Value - a.InTime.Value).TotalHours);

                response.WeeklyAttendance.Add(new WeeklyAttendanceDto
                {
                    Day = date.ToString("ddd"),
                    Hours = Math.Round(hours, 1)
                });
            }

            // 6. Team Section
            // Fetch team using: WHERE reporting_manager_id = employee.Id
            var teamMembers = await _repository.GetTeamMembersAsync(employee.Id);
            if (teamMembers.Any())
            {
                var teamIds = teamMembers.Select(t => t.Id).ToList();
                var teamAttendance = await _repository.GetTeamAttendanceTodayAsync(teamIds);

                foreach (var member in teamMembers)
                {
                    var memberAtt = teamAttendance.Where(a => a.EmployeeId == member.Id).ToList();
                    string status = "Absent";
                    if (memberAtt.Any())
                    {
                        var latestAtt = memberAtt.OrderByDescending(a => a.InTime).First();
                        status = latestAtt.WorkLocation.ToLower() == "wfh" ? "WFH" : "Present";
                    }

                    response.Team.Add(new TeamMemberDto
                    {
                        Name = member.Name,
                        Status = status
                    });
                }
            }

            // 7. Upcoming Leaves
            var leaves = await _repository.GetUpcomingLeavesAsync();
            response.UpcomingLeaves = leaves.Select(l => new LeaveDto
            {
                Id = l.Id,
                Name = l.Employee?.Name ?? "N/A",
                Days = l.TotalDays,
                Date = l.StartDate.ToString("dd MMM yyyy"),
                Type = l.LeaveType,
                Status = l.Status.ToLower()
            }).ToList();

            return response;
        }
    }
}
