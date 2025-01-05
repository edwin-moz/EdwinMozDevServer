namespace EdwinMozDevServer.Models;

public class Server
{
    public int Id { get; set; }
    public string IdentityUserId { get; set; } = "";
    public string Name { get; set; } = "";
    public string Url { get; set; } = "";
}
