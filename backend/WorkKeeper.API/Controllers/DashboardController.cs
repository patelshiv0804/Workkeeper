using Microsoft.AspNetCore.Mvc;
using WorkKeeper.API.Services;
using WorkKeeper.API.DTOs;

namespace WorkKeeper.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DashboardController : ControllerBase
    {
        private readonly IDashboardService _dashboardService;

        public DashboardController(IDashboardService dashboardService)
        {
            _dashboardService = dashboardService;
        }

        [HttpGet]
        public async Task<ActionResult<DashboardResponseDto>> GetDashboard()
        {
            try
            {
                // In a real app, we'd get the employee ID from JWT claims.
                // For now, using ID 1 as discussed.
                int employeeId = 1;
                
                var data = await _dashboardService.GetDashboardDataAsync(employeeId);
                return Ok(data);
            }
            catch (Exception ex)
            {
                // Simple error handling as requested
                return StatusCode(500, new { message = "An error occurred while fetching dashboard data.", detail = ex.Message });
            }
        }
    }
}
