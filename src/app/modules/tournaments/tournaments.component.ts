import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TournamentsService } from 'src/app/services/tournaments-service/tournaments.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss'],
})
export class TournamentsComponent implements OnInit {
  allTournaments: any;
  gameTournaments: any;
  gameSelect:string = 'lol';
  constructor(private tournamentsService: TournamentsService) {}

  ngOnInit(): void {
    this.tournamentsService.getTournaments().subscribe((res) => {
      this.allTournaments = res;
     this.onSelect();
    });
  }
  
  filterTournaments(game: string) {
    this.gameTournaments = this.allTournaments.filter((res: any) => {
      if (game) {
        return res.game_name === game;

      } else {
        return null;
      }
    });
  }

  onSelect(){
    this.filterTournaments(this.gameSelect.toString());
  }
}
