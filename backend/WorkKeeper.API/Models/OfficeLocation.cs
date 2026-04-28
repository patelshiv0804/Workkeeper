using System.ComponentModel.DataAnnotations.Schema;

namespace WorkKeeper.API.Models
{
    [Table("office_location")]
public class OfficeLocation
{
    [Column("location_id")]   // ✅ FIXED
    public int Id { get; set; }

    [Column("building_name")] // ✅ FIXED
    public string LocationName { get; set; } = string.Empty;
}
}
