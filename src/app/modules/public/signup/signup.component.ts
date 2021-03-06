import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    public _formBuilder: FormBuilder, 
    private authService: AuthService,
    private toastr: ToastrService
  ) { }
  signupForm = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    displayname: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    address: ['', [Validators.required]],
    gender:['', [Validators.required]],
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
        this.register();
      }else{
        console.log('invalid');
      }
    }
  }
  register(){
    console.log(this.signupForm.value);
    this.authService.register(this.signupForm.value).subscribe(
      res => {
        console.log(res);
        this.toastr.success('Signup Successfully');
      },
      err => {
        console.log(err);
        this.toastr.error('Signup Failed');
      }
    );
  }
}
