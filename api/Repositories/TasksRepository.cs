using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories
{
    public class TasksRepository : ITasksRepository
    {
        private readonly ApplicationDBContext _context;

        public TasksRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<List<ToDoTask>> GetTasks(AppUser user)
        {
            return await _context.Tasks.Where(t => t.AppUserId == user.Id).ToListAsync();
        }
    }
}