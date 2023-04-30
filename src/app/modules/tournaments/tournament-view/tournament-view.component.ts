import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentsService } from 'src/app/services/tournaments-service/tournaments.service';

@Component({
  selector: 'app-tournament-view',
  templateUrl: './tournament-view.component.html',
  styleUrls: ['./tournament-view.component.scss']
})
export class TournamentViewComponent implements OnInit {
  id = this.route?.snapshot.params['id'];
data:any;
  constructor(private tournamentsService: TournamentsService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    console.log(this.id)
   this.tournamentsService.getTournamentById(this.id).subscribe(
    res => this.data = res
   )
  }

}
