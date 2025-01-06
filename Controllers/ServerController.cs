using Microsoft.AspNetCore.Mvc;
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
        List<ServerDTO> serversDto = servers.Select((server) => new ServerDTO
        {
            Id = server.Id,
            IdentityUserId = server.IdentityUserId,
            ImageUrl = server.ImageUrl,
            Name = server.Name
        }).ToList();

        return Ok(serversDto);
    }

    [HttpPost]
    // [Authorize]
    public IActionResult AddServer(ServerDTO s)
    {
        Server server = new Server
        {
            IdentityUserId = s.IdentityUserId,
            ImageUrl = s.ImageUrl,
            Name = s.Name
        };

        _dbContext.Server.Add(server);
        _dbContext.SaveChanges();

        return Created($"api/server/{server.Id}", server);
    }
}
