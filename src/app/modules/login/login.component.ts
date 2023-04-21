import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  signInForm!: FormGroup;
constructor(private fb:FormBuilder,  private authService: AuthService){

}
ngOnInit(): void {
    this.form();
}
form() {
  this.signInForm = this.fb.group({
    email: ['', [Validators.email,Validators.required]],
    password: ['', Validators.required],
  });
}


onSubmit(){
  this.authService.login(this.signInForm.value.email, this.signInForm.value.password);
  this.form();
}
signInWithGoogle() {
  this.authService.googleSignIn();
}
}
