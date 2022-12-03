import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsteroidFavoriteComponent } from './asteroids/asteroid-favorite/asteroid-favorite.component';
import { AsteroidListComponent } from './asteroids/asteroid-list/asteroid-list.component';
import { HomeComponent } from './home/home.component';
import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path:'',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'asteroids', component: AsteroidListComponent},
      {path: 'asteroids/favorite', component: AsteroidFavoriteComponent},
      {path: 'profile', component: ProfileDetailComponent},
      {path: 'profile/edit', component: ProfileEditComponent},
    ]
  },
  
  {path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
