using Microsoft.OpenApi.Models;               // <‑‑ add this for OpenApiInfo

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();   // needed for Swagger UI

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo         // OpenApiInfo is in Microsoft.OpenApi.Models
    {
        Title       = "Swagger Demo",
        Version     = "v1",
        Description = "TBD",
        TermsOfService = new Uri("https://example.com"),
        Contact = new OpenApiContact
        {
            Name  = "John Doe",
            Email = "john@xyzmail.com",
            Url   = new Uri("https://example.com")
        },
        License = new OpenApiLicense
        {
            Name = "License Terms",
            Url  = new Uri("https://example.com")
        }
    });
});

var app = builder.Build();

// Swagger middleware (only in Development)
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Swagger Demo v1");
    });
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
