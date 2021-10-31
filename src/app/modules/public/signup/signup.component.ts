import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public _formBuilder: FormBuilder) { }
  signupForm = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  });
  passNotMatch(){
    if (this.signupForm.value.password !== this.signupForm.value.confirmPassword) {
      return true;
    }else{
      return false;
    }
  }
  
  ngOnInit(): void {
  }
  onSignUp(){
    if (this.passNotMatch()) {
      console.log('password not match');
    }else{
      
      if(this.signupForm.valid){
        console.log(this.signupForm.value);
      }else{
        console.log('invalid');
      }
    }
  }
}
