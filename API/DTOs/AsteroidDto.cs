using Newtonsoft.Json;

namespace API.DTOs
{
    public class AsteroidDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string  Absolute_magnitude_h { get; set; }
        public EstimatedDiameterDto Estimated_diameter { get; set; }
        [JsonProperty("is_potentially_hazardous_asteroid")]
        public bool IsHazardous { get; set; }
        public bool IsFavorite { get; set; }
    }
}