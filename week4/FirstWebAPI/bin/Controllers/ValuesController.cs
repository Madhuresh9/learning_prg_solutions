using Microsoft.AspNetCore.Mvc;

namespace FirstWebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ValuesController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("GET method is working!");
        }

        [HttpPost]
        public IActionResult Post([FromBody] string value)
        {
            return Ok($"Received via POST: {value}");
        }
    }
}
