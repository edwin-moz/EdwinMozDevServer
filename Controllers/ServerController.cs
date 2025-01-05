using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EdwinMozDevServer.Data;
using EdwinMozDevServer.Models;
using EdwinMozDevServer.Models.DTOs;

namespace EdwinMozDevServer.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ServerController : ControllerBase
{
    private EdwinMozDevServerDbContext _dbContext;

    public ServerController(EdwinMozDevServerDbContext context)
    {
        _dbContext = context;
    }

    [HttpGet]
    // [Authorize]
    public IActionResult GetServers()
    {
        List<Server> servers = _dbContext.Server.ToList();

        return Ok(servers);
    }

    [HttpPost]
    // [Authorize]
    public IActionResult AddServer(Server server)
    {
        _dbContext.Server.Add(server);
        _dbContext.SaveChanges();

        return Created($"api/server/{server.Id}", server);
    }
}
