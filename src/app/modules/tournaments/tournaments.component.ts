import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TournamentsService } from 'src/app/services/tournaments-service/tournaments.service';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit{
  selected = new FormControl('1');
allTournaments

  constructor(private tournamentsService: TournamentsService){

  }
  
    ngOnInit(): void {
      this.tournamentsService.getTournaments().subscribe(
        res => {this.allTournaments = res
        console.log(res);}
      )
  }
}
