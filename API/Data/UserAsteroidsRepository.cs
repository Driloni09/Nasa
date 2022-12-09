using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class UserAsteroidsRepository : IUserAsteroidsRepository
    {

        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public UserAsteroidsRepository(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;

        }

        public UserFavoriteAsteroids Create(UserFavoriteAsteroids userFavoriteAsteroids)
        {
            return _context.FavoriteAsteroids.Add(userFavoriteAsteroids).Entity;
        }

        public void Delete(UserFavoriteAsteroids userFavoriteAsteroids)
        {
           _context.FavoriteAsteroids.Remove(userFavoriteAsteroids);
        }

        public async Task<UserFavoriteAsteroids> FindAsteroidById(AppUser user, int asteroidId)
        {
            return await _context.FavoriteAsteroids.SingleOrDefaultAsync(_ => _.AsteroidId == asteroidId && _.User == user);

        }

        public List<int> GetUserAsteroids(int userId) {
            return _context.FavoriteAsteroids.Where(_ => _.UserId == userId).Select(_ => _.AsteroidId).ToList();
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}