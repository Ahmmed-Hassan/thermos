import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { TournamentsComponent } from './modules/tournaments/tournaments.component';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch:'full', redirectTo:'home' },
  { path: 'tournaments', component: TournamentsComponent },
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
