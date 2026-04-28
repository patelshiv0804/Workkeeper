using System.ComponentModel.DataAnnotations.Schema;

namespace WorkKeeper.API.Models
{
    [Table("leave_request")]
    public class LeaveRequest
    {
        [Column("leave_request_id")]
        public int Id { get; set; }

        [Column("employee_id")]
        public int EmployeeId { get; set; }

        [Column("leave_type")]
        public string LeaveType { get; set; } = string.Empty;

        [Column("start_date")]
        public DateTime StartDate { get; set; }

        [Column("end_date")]
        public DateTime EndDate { get; set; }

        [Column("total_days")]
        public int TotalDays { get; set; }

        [Column("status")]
        public string Status { get; set; } = "pending";

        [ForeignKey("EmployeeId")]
        public virtual Employee? Employee { get; set; }
    }
}
