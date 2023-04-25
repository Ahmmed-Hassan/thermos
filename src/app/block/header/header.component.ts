import { Observable, of } from 'rxjs';
import { RouteService } from './../../services/route-service/route.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  login = false;
  isChecked = false;
  signUp = false;
  open: boolean = false;
  loggedIn$ : Observable<boolean>;
  data: any;
  userData : any;
  displayName: string;
  constructor(private routeService:RouteService, private authService: AuthService){

  }
  ngOnInit(): void{
    this.data = localStorage.getItem('userData') || '{}';
    this.userData= JSON.parse(this.data) ;
    this.displayName = localStorage.getItem('displayName');
    this.loggedIn$ = this.authService.checkLoggedIn();
    this.routeService.getCurrentRoute().subscribe((route) => {
      if (route == '/home') {
        this.loggedIn$ = this.authService.checkLoggedIn();
        this.data = localStorage.getItem('userData') || '{}';
        this.userData= JSON.parse(this.data);
      }
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
toggleCheck(){
this.isChecked = !this.isChecked
}
logOut(){
  this.authService.logout();
  this.loggedIn$ = of(false)
}
}
