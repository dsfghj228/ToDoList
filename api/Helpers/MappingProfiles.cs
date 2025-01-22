using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Tasks;
using api.Models;
using AutoMapper;

namespace api.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<ToDoTask, TaskForReturn>();
        }   
    }
}