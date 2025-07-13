using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using FirstWebAPI.Models;
using FirstWebAPI.Filters;
namespace FirstWebAPI.Controllers;


[ApiController]
[Route("[controller]")]
[ServiceFilter(typeof(CustomAuthFilter))]
public class EmployeeController : ControllerBase
{
    private static List<Employee> _employees = new()
    {
        new Employee
        {
            Id = 1,
            Name = "Alice",
            Salary = 50000,
            Permanent = true,
            Department = new Department { Id = 1, Name = "HR" },
            Skills = new List<Skill> { new Skill { Id = 1, Name = "Communication" } },
            DateOfBirth = new DateTime(1990, 1, 1)
        },
        new Employee
        {
            Id = 2,
            Name = "Bob",
            Salary = 60000,
            Permanent = false,
            Department = new Department { Id = 2, Name = "IT" },
            Skills = new List<Skill> { new Skill { Id = 2, Name = "C#" } },
            DateOfBirth = new DateTime(1985, 5, 23)
        }
    };

    [HttpGet]
    [AllowAnonymous]
    [ProducesResponseType(typeof(List<Employee>), 200)]
    [ProducesResponseType(500)]
    public ActionResult<List<Employee>> GetStandard()
    {
        // throw new Exception("Test exception"); // Uncomment to test
        return Ok(_employees);
    }

    [HttpPost]
    public ActionResult PostEmployee([FromBody] Employee employee)
    {
        _employees.Add(employee);
        return Ok(employee);
    }

    [HttpPut]
    [Route("{id}")]
    public ActionResult<Employee> UpdateEmployee(int id, [FromBody] Employee updatedEmployee)
    {
        if (id <= 0)
        {
            return BadRequest("Invalid employee id");
        }

        var employee = _employees.FirstOrDefault(e => e.Id == id);
        if (employee == null)
        {
            return BadRequest("Invalid employee id");
        }

        
        employee.Name = updatedEmployee.Name;
        employee.Salary = updatedEmployee.Salary;
        employee.Permanent = updatedEmployee.Permanent;
        employee.Department = updatedEmployee.Department;
        employee.Skills = updatedEmployee.Skills;
        employee.DateOfBirth = updatedEmployee.DateOfBirth;

        return Ok(employee);
    }
}
