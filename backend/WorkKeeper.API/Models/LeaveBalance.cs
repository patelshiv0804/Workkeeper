using System.ComponentModel.DataAnnotations.Schema;

namespace WorkKeeper.API.Models
{
    [Table("leave_balance")]
    public class LeaveBalance
    {
        [Column("leave_balance_id")]
        public int Id { get; set; }

        [Column("employee_id")]
        public int EmployeeId { get; set; }

        [Column("leave_type")]
        public string LeaveType { get; set; } = string.Empty;

        [Column("total_allocated")]
        public int TotalAllocated { get; set; }

        [Column("used")]
        public int Used { get; set; }

        [Column("remaining")]
        public int Remaining { get; set; }

        [ForeignKey("EmployeeId")]
        public virtual Employee? Employee { get; set; }
    }
}
