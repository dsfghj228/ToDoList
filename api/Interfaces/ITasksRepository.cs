using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Tasks;
using api.Models;

namespace api.Interfaces
{
    public interface ITasksRepository
    {
        Task<List<ToDoTask>> GetTasks(AppUser user);
        Task<ToDoTask> CreateTask(ToDoTask task);
        Task<ToDoTask> DeleteTask(Guid Id, string AppUserId);
        Task<ToDoTask> UpdateTask(Guid Id, string AppUserId, CreateOrUpdateTaskModel task);
    }
}