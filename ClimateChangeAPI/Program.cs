using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http.Json;
using Microsoft.AspNetCore.Mvc;
using ClimateChange.Models;

var builder = WebApplication.CreateBuilder(args);

// Add CORS services
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

// Use CORS policy
app.UseCors("AllowAllOrigins");

List<ClimateRecord> climateRecords = new List<ClimateRecord>
{
    new ClimateRecord { Id = 1, Country = "USA", TemperatureChange = 1.2, Year = 2022 },
    new ClimateRecord { Id = 2, Country = "India", TemperatureChange = 0.9, Year = 2022 },
    new ClimateRecord { Id = 3, Country = "Brazil", TemperatureChange = 1.5, Year = 2023 }
};

// Define your API endpoints
app.MapGet("/climate", () =>
{
    return Results.Ok(climateRecords);
});

app.MapGet("/climate/{id:int}", (int id) =>
{
    var record = climateRecords.FirstOrDefault(r => r.Id == id);
    return record is not null ? Results.Ok(record) : Results.NotFound("Record not found.");
});

app.MapPost("/climate/add", (ClimateRecord newRecord) =>
{
    newRecord.Id = climateRecords.Any() ? climateRecords.Max(r => r.Id) + 1 : 1;
    climateRecords.Add(newRecord);
    return Results.Created($"/climate/{newRecord.Id}", newRecord);
});

app.MapPut("/climate/update/{id:int}", (int id, ClimateRecord updatedRecord) =>
{
    var record = climateRecords.FirstOrDefault(r => r.Id == id);
    if (record is null)
    {
        return Results.NotFound("Record not found.");
    }

    record.Country = updatedRecord.Country;
    record.TemperatureChange = updatedRecord.TemperatureChange;
    record.Year = updatedRecord.Year;

    return Results.Ok(record);
});

app.MapDelete("/climate/remove/{id:int}", (int id) =>
{
    var record = climateRecords.FirstOrDefault(r => r.Id == id);
    if (record is not null)
    {
        climateRecords.Remove(record);
        return Results.Ok("Record deleted.");
    }
    return Results.NotFound("Record not found.");
});

app.Run();
