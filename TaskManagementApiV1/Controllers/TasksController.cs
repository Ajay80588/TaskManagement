using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManagementAPIV1.Model;
using Task = TaskManagementAPIV1.Model.Task;

namespace TaskManagementAPIV1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TasksController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public TasksController(ApiDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Task>>> Get()
        {
            try
            {
                var tasks = await _context.Tasks.ToListAsync();
                return Ok(tasks);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpPost]
        public async Task<ActionResult<Task>> Post(TaskPayload taskPayload)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var task = new Task
                {
                    Description = taskPayload.Description
                };

                _context.Tasks.Add(task);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(Post), new { id = task.Id }, task);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var task = await _context.Tasks.FindAsync(id);
                if (task == null)
                {
                    return NotFound();
                }

                _context.Tasks.Remove(task);
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
