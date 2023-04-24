import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

   passwordMatchValidator(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('cpassword').value;
  
    return password === confirmPassword ? null : { passwordsNotMatch: true };
  }
  constructor( private fb: FormBuilder,  private authService: AuthService){

  }
  signUpForm!: FormGroup;
  get userName(){
    return this.signUpForm.get('userName')
  }
  get email(){
    return this.signUpForm.get('email')
  }
  get password(){
    return this.signUpForm.get('password');
  }
  get cpassword(){
    return this.signUpForm.get('cpassword')
  }
  ngOnInit(): void {
      this.form();
  }
  
  form() {
    this.signUpForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      cpassword: ['', [Validators.required]],
    },{validators: this.passwordMatchValidator});
  }
  onSubmit(){
    this.authService.register(this.signUpForm.value.email, this.signUpForm.value.password, this.signUpForm.value.userName);
    this.form();
  }
  signInWithGoogle() {
    this.authService.googleSignIn();
  }
}
