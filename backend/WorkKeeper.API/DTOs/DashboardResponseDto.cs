using System.Text.Json.Serialization;

namespace WorkKeeper.API.DTOs
{
    public class DashboardResponseDto
    {
        [JsonPropertyName("employeeInfo")]
        public EmployeeInfoDto EmployeeInfo { get; set; } = new();

        [JsonPropertyName("todayPresence")]
        public TodayPresenceDto TodayPresence { get; set; } = new();

        [JsonPropertyName("locationStatus")]
        public LocationStatusDto LocationStatus { get; set; } = new();

        [JsonPropertyName("leaveBalance")]
        public LeaveBalanceDto LeaveBalance { get; set; } = new();

        [JsonPropertyName("weeklyAttendance")]
        public List<WeeklyAttendanceDto> WeeklyAttendance { get; set; } = new();

        [JsonPropertyName("team")]
        public List<TeamMemberDto> Team { get; set; } = new();

        [JsonPropertyName("upcomingLeaves")]
        public List<LeaveDto> UpcomingLeaves { get; set; } = new();
    }

    public class EmployeeInfoDto
    {
        [JsonPropertyName("name")]
        public string Name { get; set; } = string.Empty;

        [JsonPropertyName("empId")]
        public string EmpId { get; set; } = string.Empty;

        [JsonPropertyName("department")]
        public string Department { get; set; } = string.Empty;

        [JsonPropertyName("manager")]
        public string Manager { get; set; } = string.Empty;

        [JsonPropertyName("shift")]
        public string Shift { get; set; } = string.Empty;
    }

    public class TodayPresenceDto
    {
        [JsonPropertyName("totalHours")]
        public string TotalHours { get; set; } = "00:00";

        [JsonPropertyName("firstIn")]
        public string FirstIn { get; set; } = "--:--";

        [JsonPropertyName("lastOut")]
        public string LastOut { get; set; } = "--:--";
    }

    public class LocationStatusDto
    {
        [JsonPropertyName("status")]
        public string Status { get; set; } = "WFH";

        [JsonPropertyName("location")]
        public string Location { get; set; } = "Unknown";
    }

    public class LeaveBalanceDto
    {
        [JsonPropertyName("privilege")]
        public int Privilege { get; set; }

        [JsonPropertyName("optional")]
        public int Optional { get; set; }

        [JsonPropertyName("comp")]
        public int Comp { get; set; }

        [JsonPropertyName("lop")]
        public int Lop { get; set; }
    }

    public class WeeklyAttendanceDto
    {
        [JsonPropertyName("day")]
        public string Day { get; set; } = string.Empty;

        [JsonPropertyName("hours")]
        public double Hours { get; set; }
    }

    public class TeamMemberDto
    {
        [JsonPropertyName("name")]
        public string Name { get; set; } = string.Empty;

        [JsonPropertyName("status")]
        public string Status { get; set; } = "Absent"; // Present | WFH | Absent
    }

    public class LeaveDto
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; } = string.Empty;

        [JsonPropertyName("days")]
        public int Days { get; set; }

        [JsonPropertyName("date")]
        public string Date { get; set; } = string.Empty;

        [JsonPropertyName("type")]
        public string Type { get; set; } = string.Empty;

        [JsonPropertyName("status")]
        public string Status { get; set; } = string.Empty; // approved | pending | rejected
    }
}
