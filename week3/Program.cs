using RetailInventory;
using RetailInventory.Models;
using Microsoft.EntityFrameworkCore;

using (var context = new RetailDbContext())
{
    // Only add data if the DB is empty
    if (!context.Categories.Any())
    {
        var electronics = new Category { Name = "Electronics" };
        context.Categories.Add(electronics);

        var mouse = new Product { Name = "Mouse", Category = electronics };
        var keyboard = new Product { Name = "Keyboard", Category = electronics };

        context.Products.AddRange(mouse, keyboard);

        context.Stocks.AddRange(
            new Stock { Product = mouse, Quantity = 50 },
            new Stock { Product = keyboard, Quantity = 30 }
        );

        context.SaveChanges();
    }

    // Display all products with category and stock
    var products = context.Products
        .Include(p => p.Category)
        .Include(p => p.Stock)
        .ToList();

    foreach (var product in products)
    {
        Console.WriteLine($"Product: {product.Name}, Category: {product.Category.Name}, Stock: {product.Stock?.Quantity ?? 0}");
    }
}
