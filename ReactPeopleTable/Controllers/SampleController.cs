using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Faker;

namespace ReactPeopleTable.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SampleController : ControllerBase
    {
        [Route("person")]
        [HttpGet]
        public Person GetPerson()
        {
            return new Person
            {
                FirstName = Name.First(),
                LastName = Name.Last(),
                Age = RandomNumber.Next(20, 80)
            };
        }

        [Route("personage")]
        [HttpPost]
        public Person GetPerson(PersonRange range)
        {
            return new Person
            {
                FirstName = Name.First(),
                LastName = Name.Last(),
                Age = RandomNumber.Next(range.Min, range.Max)
            };
        }
    }

    public class PersonRange
    {
        public int Min { get; set; }
        public int Max { get; set; }
        
    }

    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
    }
}