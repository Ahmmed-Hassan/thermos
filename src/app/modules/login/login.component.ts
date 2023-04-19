import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  signInForm!: FormGroup;
constructor(private fb:FormBuilder){

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

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
}
