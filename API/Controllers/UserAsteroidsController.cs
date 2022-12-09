using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Security.Claims;

namespace API.Controllers
{
    public class UserAsteroidsController : BaseApiController
    {
        private readonly IUserRepository _userRepository;
        private readonly IConfiguration _configuration;
        private readonly IUserAsteroidsRepository _userAsteroidsRepository;
        public UserAsteroidsController(IConfiguration configuration, IUserRepository userRepository,
         IUserAsteroidsRepository userAsteroidsRepository)
        {
            _userAsteroidsRepository = userAsteroidsRepository;
            _userRepository = userRepository;
            _configuration = configuration;
        }

        [HttpGet]
        public ActionResult<IEnumerable<AsteroidDto>> GetAllAsteroids()
        {
            var asteroidList = FetchAsteroidsFromNasaAPI();
            var userId = HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);

            var favoriteIds = _userAsteroidsRepository.GetUserAsteroids(int.Parse(userId));
            asteroidList.ForEach(_ =>
            {
                if(favoriteIds.Contains(_.Id))
                {
                    _.IsFavorite = true;
                }
            });

            return Ok(asteroidList);
        }

        [HttpGet("{userId}")]
        public ActionResult<IEnumerable<AsteroidDto>> GetFavoritesAsteroidsByUser(int userId)
        {
            var asteroidsList = FetchAsteroidsFromNasaAPI();
            var userFavoriteAsteroidIds = _userAsteroidsRepository.GetUserAsteroids(userId);
            var userFavoriteAsteroids = asteroidsList.Where(_ => userFavoriteAsteroidIds.Contains(_.Id)).ToList();

            return Ok(userFavoriteAsteroids);
        }

        [HttpPost("mark-unmark")]
        public async Task<IActionResult> MarkUnmarkAsteroid([FromBody] UserAsteroidDto userAsteroidDto)
        {
            var user = await _userRepository.GetUserByIdAsync(userAsteroidDto.UserId);
            if (user == null)
            {
                return BadRequest("Can not find user");
            }

            var userFavoriteAsteroid = await _userAsteroidsRepository.FindAsteroidById(user, userAsteroidDto.AsteroidId);
            if (userFavoriteAsteroid == null) {
                userFavoriteAsteroid = new UserFavoriteAsteroids {
                    User = user,
                    AsteroidId = userAsteroidDto.AsteroidId
                };
                _userAsteroidsRepository.Create(userFavoriteAsteroid);
            } else {
                _userAsteroidsRepository.Delete(userFavoriteAsteroid);
            }

            await _userAsteroidsRepository.SaveAllAsync();

            return Ok(new {
                userId = user.Id,
                asteroidId = userAsteroidDto.AsteroidId
            });

        }

        private List<AsteroidDto> FetchAsteroidsFromNasaAPI() {
            string url = _configuration.GetSection("AppSettings:AsteroidsCapAPIBaseURL").Value;

            using HttpClient client = new HttpClient();
            var response = client.GetAsync(url).Result;
            var json = response.Content.ReadAsStringAsync().Result;
            var jsonObject = JsonConvert.DeserializeObject<NasaResponseDto>(json);
            var nearEarthObjects = jsonObject.NearEarthObjects;

            return nearEarthObjects.First.Concat(nearEarthObjects.Second).Take(30).ToList();
        }


    }
}