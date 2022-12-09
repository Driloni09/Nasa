import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AsteroidDtoApiModel, UserAsteroidDtoApiModel } from 'src/app/api/models';
import { UserAsteroidsApiService } from 'src/app/api/services';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-asteroid-list',
  templateUrl: './asteroid-list.component.html',
  styleUrls: ['./asteroid-list.component.css']
})
export class AsteroidListComponent implements OnInit {

  public asteroids: AsteroidDtoApiModel[] = [];
  public currentUser: User | null = null;
  constructor(private asteroidsApiService: UserAsteroidsApiService, private accountService: AccountService, private http: HttpClient) {
    this.accountService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    })
   }

  ngOnInit(): void {
    this.loadAsteroids();
  }

  markUnmark(asteroidId: number | undefined) {
    console.log(this.currentUser?.id);
    console.log(JSON.parse(localStorage.getItem('user') ?? ''));
    this.asteroidsApiService.apiUserAsteroidsMarkUnmarkPost$Response({body: {asteroidId: asteroidId, userId: this.currentUser?.id}}).subscribe();
  }

  loadAsteroids() {
    this.asteroidsApiService.apiUserAsteroidsGet$Json().subscribe(response => {
      this.asteroids = response;
    });
  }

}
