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

        public async Task<ToDoTask> CreateTask(ToDoTask task)
        {
            await _context.Tasks.AddAsync(task);
            await _context.SaveChangesAsync();

            return task;
        }

        public async Task<ToDoTask> DeleteTask(Guid Id, string AppUserId)
        {
            var taskForDelete = await _context.Tasks.FirstOrDefaultAsync(t => t.Id == Id && t.AppUserId == AppUserId);

            if(taskForDelete is null)
            {
                return null;
            }

             _context.Tasks.Remove(taskForDelete);
             await _context.SaveChangesAsync();

             return taskForDelete;
        }

        public async Task<List<ToDoTask>> GetTasks(AppUser user)
        {
            return await _context.Tasks.Where(t => t.AppUserId == user.Id).ToListAsync();
        }
    }
}