import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor( private fb: FormBuilder,){

  }
  signUpForm!: FormGroup;


  ngOnInit(): void {
      this.form();
  }
  form() {
    this.signUpForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.email]],
      password: ['', Validators.required],
      cpassword: ['', [Validators.required]],
    });
  }

}
