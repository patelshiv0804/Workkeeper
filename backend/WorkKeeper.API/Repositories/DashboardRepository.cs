using Microsoft.EntityFrameworkCore;
using WorkKeeper.API.Data;
using WorkKeeper.API.Models;

namespace WorkKeeper.API.Repositories
{
    public interface IDashboardRepository
    {
        Task<Employee?> GetEmployeeWithDetailsAsync(int employeeId);
        Task<List<Attendance>> GetTodayAttendanceAsync(int employeeId);
        Task<List<Attendance>> GetWeeklyAttendanceAsync(int employeeId, DateTime startDate);
        Task<List<LeaveBalance>> GetLeaveBalancesAsync(int employeeId);
        Task<List<LeaveRequest>> GetUpcomingLeavesAsync();
        Task<List<Employee>> GetTeamMembersAsync(int managerId);
        Task<List<Attendance>> GetTeamAttendanceTodayAsync(List<int> employeeIds);
    }

    public class DashboardRepository : IDashboardRepository
    {
        private readonly AppDbContext _context;

        public DashboardRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Employee?> GetEmployeeWithDetailsAsync(int employeeId)
        {
            return await _context.Employees
                .Include(e => e.Department)
                .Include(e => e.Shift)
                .Include(e => e.Manager)
                .FirstOrDefaultAsync(e => e.Id == employeeId);
        }

        public async Task<List<Attendance>> GetTodayAttendanceAsync(int employeeId)
        {
            var today = DateTime.UtcNow.Date;
            var tomorrow = today.AddDays(1);
            return await _context.Attendances
                .Where(a => a.EmployeeId == employeeId && a.Date >= today && a.Date < tomorrow)
                .OrderBy(a => a.InTime)
                .ToListAsync();
        }

        public async Task<List<Attendance>> GetWeeklyAttendanceAsync(int employeeId, DateTime startDate)
        {
            return await _context.Attendances
                .Where(a => a.EmployeeId == employeeId && a.Date >= startDate)
                .ToListAsync();
        }

        public async Task<List<LeaveBalance>> GetLeaveBalancesAsync(int employeeId)
        {
            return await _context.LeaveBalances
                .Where(l => l.EmployeeId == employeeId)
                .ToListAsync();
        }

        public async Task<List<LeaveRequest>> GetUpcomingLeavesAsync()
        {
            var today = DateTime.UtcNow.Date;
            return await _context.LeaveRequests
                .Include(l => l.Employee)
                .Where(l => l.StartDate >= today)
                .OrderBy(l => l.StartDate)
                .ToListAsync();
        }

        public async Task<List<Employee>> GetTeamMembersAsync(int managerId)
        {
            return await _context.Employees
                .Where(e => e.ReportingManagerId == managerId)
                .ToListAsync();
        }

        public async Task<List<Attendance>> GetTeamAttendanceTodayAsync(List<int> employeeIds)
        {
            var today = DateTime.UtcNow.Date;
            var tomorrow = today.AddDays(1);
            return await _context.Attendances
                .Where(a => employeeIds.Contains(a.EmployeeId) && a.Date >= today && a.Date < tomorrow)
                .ToListAsync();
        }
    }
}
