import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireAuth: AngularFireAuth, private router: Router, private fireStore: AngularFirestore) {}
  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(
      res => {
        localStorage.setItem('token',res.user?.uid);
        localStorage.setItem('userData',JSON.stringify(res.user));
        let data;
         this.fireStore.collection('users/').doc( localStorage.getItem('token')).valueChanges().subscribe(
          res=> {data = res
          localStorage.setItem('displayName', data.username)} 
      
        );
        this.router.navigate(['/home'])
      },
      (err) => {
        alert('Something went wrong');
        this.router.navigate(['/login']);
      }
    );
  }


  register(email:string, password: string, userName: string){
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(
      res=>{
        alert('Registered Successfully');
        this.sendEmailForVerification(res.user);
        const user = res.user;
        const username = userName// Get the user's username from the form input
    
        // Create a new document in Firestore with the user's profile information
        this.fireStore.collection('users').doc(user!.uid).set({
          email: email,
          username: username
        });
      }, err=>{
        alert(err.message);
        this.router.navigate(['/sign-up'])
      }
    )
  }
  logout(){
    this.fireAuth.signOut().then(
      ()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        this.router.navigate(['/home']);
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
      localStorage.setItem('userData',JSON.stringify(res.user));

    }, err => {
      alert(err.message);
    })
  }

  checkLoggedIn(): Observable<boolean> {
    const data = localStorage.getItem('userData');
    return of(data !== null);
  }
}
