using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using api.Data;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]

    public class TasksController : ControllerBase
    {
        private readonly ITasksRepository _tasksRepo;
        private readonly UserManager<AppUser> _userManager;

        public TasksController(ITasksRepository tasksRepo, UserManager<AppUser> userManager)
        {
            _tasksRepo = tasksRepo;
            _userManager = userManager;
        }

        [HttpGet]
        public async Task<IActionResult> GetTasks()
        {
            try
            {
                var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

                var appUser = await _userManager.FindByIdAsync(userId);

                if(appUser is null)
                {
                    return NotFound("User not found");
                }

                var tasks = await _tasksRepo.GetTasks(appUser);

                if(tasks is null)
                {
                    return NotFound("No tasks found");
                }
            
                return Ok(tasks);

            } catch(Exception e)
            {
                return StatusCode(500, "Internal server error: " + e.Message);
            }
        }
    }
}