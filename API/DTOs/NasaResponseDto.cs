using Newtonsoft.Json;

namespace API.DTOs
{
    public class NasaResponseDto
    {
        [JsonProperty("near_earth_objects")]
        public NearEarthObjectDto NearEarthObjects { get; set; }
    }
}