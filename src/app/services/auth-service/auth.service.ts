import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}
  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(
      res => {
        localStorage.setItem('token', 'true');
      },
      (err) => {
        alert('Something went wrong');
        this.router.navigate(['/login']);
      }
    );
  }


  register(email:string, password: string){
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(
      res=>{
        alert('Registered Successfully');
        this.sendEmailForVerification(res.user);
      }, err=>{
        alert(err.message);
        this.router.navigate(['/sign-up'])
      }
    )
  }
  logout(){
    this.fireAuth.signOut().then(
      ()=>{
        localStorage.removeItem('token')
        this.router.navigate(['/login']);
      }, err =>{
        alert(err.message)
      }
    )
  }


  forgotPassword(email:string){
    this.fireAuth.sendPasswordResetEmail(email).then(
      ()=>{
        this.router.navigate(['/verify-email']);
      }, err=>{
        alert(err.message)
      }
    )
  }


  sendEmailForVerification(user : any) {
    user.sendEmailVerification().then((res : any) => {
      this.router.navigate(['/verify-email']);
    }, (err : any) => {
      alert('Something went wrong. Not able to send mail to your email.')
    })
  }


  googleSignIn() {
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider).then(res => {

      this.router.navigate(['/home']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid));

    }, err => {
      alert(err.message);
    })
  }
}
