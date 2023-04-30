import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentsComponent } from './tournaments.component';
import { CurrentTournamentsComponent } from './current-tournaments/current-tournaments.component';
import { MyTournamentsComponent } from './my-tournaments/my-tournaments.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TournamentsService } from 'src/app/services/tournaments-service/tournaments.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { TournamentViewComponent } from './tournament-view/tournament-view.component';
import { RouterLink } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  declarations: [TournamentsComponent, CurrentTournamentsComponent, MyTournamentsComponent, TournamentViewComponent ],
  providers: [TournamentsService ]
})
export class TournamentsModule { }