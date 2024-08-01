using System.ComponentModel.DataAnnotations;

namespace TaskManagementAPIV1.Model
{
    public class TaskPayload
    {
        [Required]
        [StringLength(255, MinimumLength = 1)]
        public string Description { get; set; }
    }
}
