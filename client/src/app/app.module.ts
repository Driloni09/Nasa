import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AsteroidListComponent } from './asteroids/asteroid-list/asteroid-list.component';
import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { AsteroidFavoriteComponent } from './asteroids/asteroid-favorite/asteroid-favorite.component';
import { ToastrModule } from 'ngx-toastr';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    AsteroidListComponent,
    ProfileDetailComponent,
    ProfileEditComponent,
    AsteroidFavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
