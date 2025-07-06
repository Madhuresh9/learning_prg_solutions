using Microsoft.EntityFrameworkCore;
using RetailInventory.Models;

namespace RetailInventory       
{
    public class RetailDbContext : DbContext
    {
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Stock> Stocks { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=localhost;Database=RetailInventoryDb;Trusted_Connection=True;TrustServerCertificate=True;");

        }
    }
}
