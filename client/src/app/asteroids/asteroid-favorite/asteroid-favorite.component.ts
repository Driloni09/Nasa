import { Component, OnInit } from '@angular/core';
import { AsteroidDtoApiModel } from 'src/app/api/models';
import { UserAsteroidsApiService } from 'src/app/api/services';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-asteroid-favorite',
  templateUrl: './asteroid-favorite.component.html',
  styleUrls: ['./asteroid-favorite.component.css']
})
export class AsteroidFavoriteComponent implements OnInit {
  public currentUser: User | null = null;
  public asteroids: AsteroidDtoApiModel[] = [];
  
  constructor(private asteroidsApiService: UserAsteroidsApiService, private accountService: AccountService) { 
    this.accountService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    })
  }

  ngOnInit(): void {
    // ki me marr id e current user
    this.favoriteAsteroids()
    // ki me thirre api me qat id me ti kthy asteroidat
    //      te tabela select * ku user id = me current user id
    // me i shfaq ne html
  }
  
  favoriteAsteroids() {
    if(this.currentUser) {
      console.log(this.currentUser.id)
      this.asteroidsApiService.apiUserAsteroidsUserIdGet$Json({ userId: this.currentUser.id}).subscribe(response => {
        this.asteroids = response;
        console.log(response);
      })
    }
  }


  

}
