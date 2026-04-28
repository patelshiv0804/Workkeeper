using System.ComponentModel.DataAnnotations.Schema;

namespace WorkKeeper.API.Models
{
    [Table("organization_unit")]
    public class OrganizationUnit
    {
        [Column("org_unit_id")]
        public int Id { get; set; }

        [Column("org_unit_name")]
        public string Name { get; set; } = string.Empty;
    }
}
