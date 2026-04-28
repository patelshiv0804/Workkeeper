using System.ComponentModel.DataAnnotations.Schema;

namespace WorkKeeper.API.Models
{
    [Table("attendance")]
    public class Attendance
    {
        [Column("attendance_id")]
        public int Id { get; set; }

        [Column("employee_id")]
        public int EmployeeId { get; set; }

        [Column("attendance_date")]
        public DateTime Date { get; set; }

        [Column("in_time")]
        public DateTime? InTime { get; set; }

        [Column("out_time")]
        public DateTime? OutTime { get; set; }

        [Column("work_location")]
        public string WorkLocation { get; set; } = "wfh";

        [Column("total_hours")]
        public double? TotalHours { get; set; }

        [ForeignKey("EmployeeId")]
        public virtual Employee? Employee { get; set; }
    }
}
