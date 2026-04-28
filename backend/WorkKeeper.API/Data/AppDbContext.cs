using Microsoft.EntityFrameworkCore;
using WorkKeeper.API.Models;

namespace WorkKeeper.API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Attendance> Attendances { get; set; }
        public DbSet<LeaveBalance> LeaveBalances { get; set; }
        public DbSet<LeaveRequest> LeaveRequests { get; set; }
        public DbSet<OrganizationUnit> OrganizationUnits { get; set; }
        public DbSet<Shift> Shifts { get; set; }
        public DbSet<OfficeLocation> OfficeLocations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Self-referencing relationship for Manager
            modelBuilder.Entity<Employee>()
                .HasOne(e => e.Manager)
                .WithMany(m => m.TeamMembers)
                .HasForeignKey(e => e.ReportingManagerId)
                .OnDelete(DeleteBehavior.Restrict);

            // Global Value Converter for DateTime to ensure UTC Kind
            // This fixes the "Cannot write DateTime with Kind=Local to PostgreSQL type 'timestamp with time zone'" error
            foreach (var entityType in modelBuilder.Model.GetEntityTypes())
            {
                foreach (var property in entityType.GetProperties())
                {
                    if (property.ClrType == typeof(DateTime) || property.ClrType == typeof(DateTime?))
                    {
                        property.SetValueConverter(new Microsoft.EntityFrameworkCore.Storage.ValueConversion.ValueConverter<DateTime, DateTime>(
                            v => v.Kind == DateTimeKind.Unspecified ? DateTime.SpecifyKind(v, DateTimeKind.Utc) : v.ToUniversalTime(),
                            v => DateTime.SpecifyKind(v, DateTimeKind.Utc)));
                    }
                }
            }
        }
    }
}
