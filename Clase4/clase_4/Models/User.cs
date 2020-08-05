using Newtonsoft.Json;



namespace clase_4.Models
{
  public class User
  {
    public long Id { get; set; }

    public string dni { get; set; }
    
    public string name { get; set; }

    public string tel { get; set; }
    
    public string Email { get; set; }
    [JsonIgnore]
    public string Password { get; set; }
  }
}
