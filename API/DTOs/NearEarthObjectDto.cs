using Newtonsoft.Json;

namespace API.DTOs
{
    public class NearEarthObjectDto
    {
        [JsonProperty("2015-09-08")]
        public List<AsteroidDto> First { get; set; }
        [JsonProperty("2015-09-07")]
        public List<AsteroidDto> Second { get; set; }
    }
}