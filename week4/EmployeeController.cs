using Microsoft.AspNetCore.Mvc;

namespace FirstWebAPI.Controllers
{
    [ApiController]
    [Route("Emp")] // Changed route from default to "Emp"
    public class EmployeeController : ControllerBase
    {
        private static List<string> Employees = new() { "Alice", "Bob", "Charlie" };

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult GetEmployees()
        {
            return Ok(Employees);
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public IActionResult AddEmployee([FromBody] string name)
        {
            Employees.Add(name);
            return CreatedAtAction(nameof(GetEmployees), new { }, name);
        }
    }
}
