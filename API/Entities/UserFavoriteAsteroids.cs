namespace API.Entities
{
    public class UserFavoriteAsteroids 
    {
        public int Id { get; set; }
        public AppUser User { get; set; }
        public int UserId { get; set; }
        public int AsteroidId { get; set; }
    }
}