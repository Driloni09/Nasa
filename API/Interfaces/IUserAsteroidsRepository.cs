using API.Entities;

namespace API.Interfaces
{
    public interface IUserAsteroidsRepository
    {
       Task<UserFavoriteAsteroids> FindAsteroidById(AppUser user, int asteroidId);
       UserFavoriteAsteroids Create(UserFavoriteAsteroids userFavoriteAsteroids);
       List<int> GetUserAsteroids(int userId);
       void Delete(UserFavoriteAsteroids userFavoriteAsteroids);
       Task<bool> SaveAllAsync();

    }
}