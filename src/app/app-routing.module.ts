import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { TournamentsComponent } from './modules/tournaments/tournaments.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: 0 } },
  { path: 'tournaments', component: TournamentsComponent, data: { animation: 1 } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
