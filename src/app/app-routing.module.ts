import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { TournamentsComponent } from './modules/tournaments/tournaments.component';
import { LoginComponent } from './modules/login/login.component';
import { SignupComponent } from './modules/signup/signup.component';
import { AuthGaurdService } from './services/auth-gaurd/auth-gaurd.service';
import { TournamentViewComponent } from './modules/tournaments/tournament-view/tournament-view.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch:'full', redirectTo:'home' },
  { path: 'tournaments', component: TournamentsComponent,

},  { path: 'tournament/:id', component: TournamentViewComponent,

},
  {path: 'login', canActivate:[AuthGaurdService], component:LoginComponent},
  {path: 'sign-up',canActivate:[AuthGaurdService], component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
