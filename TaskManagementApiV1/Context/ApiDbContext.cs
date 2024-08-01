using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace TaskManagementAPIV1.Model
{
    public class ApiDbContext : DbContext
    {
        public DbSet<Task> Tasks { get; set; }

        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options) { }
    }
}
