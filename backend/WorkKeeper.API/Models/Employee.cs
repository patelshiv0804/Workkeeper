using System.ComponentModel.DataAnnotations.Schema;

namespace WorkKeeper.API.Models
{
    [Table("employee")]
    public class Employee
    {
        [Column("employee_id")]
        public int Id { get; set; }

        [Column("first_name")]
        public string FirstName { get; set; } = string.Empty;

        [Column("last_name")]
        public string LastName { get; set; } = string.Empty;

        [Column("employee_code")]
        public string EmpCode { get; set; } = string.Empty;

        [Column("department_id")]
        public int? DepartmentId { get; set; }

        [Column("reporting_manager_id")]
        public int? ReportingManagerId { get; set; }

        [Column("shift_id")]
        public int? ShiftId { get; set; }

        [Column("current_status")]
        public string? CurrentStatus { get; set; }

        [NotMapped]
        public string Name => $"{FirstName} {LastName}".Trim();

        // Navigation properties
        [ForeignKey("DepartmentId")]
        public virtual OrganizationUnit? Department { get; set; }

        [ForeignKey("ShiftId")]
        public virtual Shift? Shift { get; set; }

        [ForeignKey("ReportingManagerId")]
        public virtual Employee? Manager { get; set; }

        public virtual ICollection<Employee> TeamMembers { get; set; } = new List<Employee>();
        public virtual ICollection<Attendance> Attendances { get; set; } = new List<Attendance>();
        public virtual ICollection<LeaveRequest> LeaveRequests { get; set; } = new List<LeaveRequest>();
        public virtual ICollection<LeaveBalance> LeaveBalances { get; set; } = new List<LeaveBalance>();
    }
}
