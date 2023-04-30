import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router:Router, private authService:AuthService) { }

canActivate(): boolean {
  return this.checkIsLoggedIn()
}

checkIsLoggedIn():boolean{
  if(this.authService.isLoggedIn){
    this.router.navigate(['/home'])
    return false;
  }else{

    return true;
  }

}
}
