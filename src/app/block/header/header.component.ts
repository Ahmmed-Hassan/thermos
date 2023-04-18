import { RouteService } from './../../services/route-service/route.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  login = false;
  signUp = false;

  constructor(private routeService:RouteService){

  }
  ngOnInit(): void{
    this.routeService.getCurrentRoute().subscribe((route) => {
      if (route == '/login') {
        this.login = true;
      } else {
        this.login = false;
      }
      if (route == '/sign-up') {
        this.signUp = true;
      } else {
        this.signUp = false;
      }
    });
  }

}
