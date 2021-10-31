import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _formBuilder: FormBuilder) { }
  public loginForm = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });
  ngOnInit(): void {
  }
  onLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }else{
      console.log('invalid');
    }
  }
}
