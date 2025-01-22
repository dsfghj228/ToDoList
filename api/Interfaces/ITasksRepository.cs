using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;

namespace api.Interfaces
{
    public interface ITasksRepository
    {
        Task<List<ToDoTask>> GetTasks(AppUser user);
        Task<ToDoTask> CreateTask(ToDoTask task);
    }
}