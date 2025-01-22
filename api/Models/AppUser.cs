using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Identity;

namespace api.Models
{
    public class AppUser : IdentityUser
    {
        [JsonIgnore]
        public ICollection<ToDoTask> Tasks { get; set; }
    }
}
