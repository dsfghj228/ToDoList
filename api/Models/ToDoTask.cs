using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class ToDoTask
    {
        public Guid Id { get; set; }
        public string Title { get; set; }

        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }
    }
}