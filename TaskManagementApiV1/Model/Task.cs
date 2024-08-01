namespace TaskManagementAPIV1.Model
{
    public class Task
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
