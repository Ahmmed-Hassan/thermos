import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-tournaments',
  templateUrl: './current-tournaments.component.html',
  styleUrls: ['./current-tournaments.component.scss']
})
export class CurrentTournamentsComponent implements OnInit {
@Input() cardsData:any[];

constructor(){

}

  ngOnInit(): void {
 console.log(this.cardsData)
}
}
