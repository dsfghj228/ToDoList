using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Tasks;
using api.Interfaces;
using api.Models;
using AutoMapper;
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
        private readonly IMapper _mapper;

        public TasksController(ITasksRepository tasksRepo, UserManager<AppUser> userManager, IMapper mapper)
        {
            _tasksRepo = tasksRepo;
            _userManager = userManager;
            _mapper = mapper;
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

                var tasksForReturn = _mapper.Map<List<TaskForReturn>>(tasks);
            
                return Ok(tasksForReturn);

            } catch(Exception e)
            {
                return StatusCode(500, "Internal server error: " + e.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateTask([FromBody] CreateTaskModel createTaskModel)
        {
            if (createTaskModel is null)
            {
                return BadRequest("Task model is null");
            }

            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            var appUser = await _userManager.FindByIdAsync(userId);

            if (appUser is null)
            {
                return NotFound("User not found");
            }

            var task = new ToDoTask 
            {
                Title = createTaskModel.Title,
                AppUser = appUser,
                AppUserId = userId
            };

            await _tasksRepo.CreateTask(task);

            var taskForReturn = _mapper.Map<TaskForReturn>(task);

            return CreatedAtAction(nameof(GetTasks), new { id = task.Id }, taskForReturn);
        }
    }
}