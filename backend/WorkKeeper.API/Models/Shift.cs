using System.ComponentModel.DataAnnotations.Schema;

namespace WorkKeeper.API.Models
{
    [Table("shift")]
    public class Shift
    {
        [Column("shift_id")]
        public int Id { get; set; }

        [Column("shift_name")]
        public string Name { get; set; } = string.Empty;
    }
}
