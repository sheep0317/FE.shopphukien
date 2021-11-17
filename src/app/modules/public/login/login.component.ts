import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _formBuilder: FormBuilder, private http: HttpClient) { }
  public loginForm = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });
  ngOnInit(): void {
  }
  onLogin() {
    if (this.loginForm.valid) {
        this.http.post('http://localhost:3000/api/user/login', this.loginForm.value).subscribe(res => {
            this.getToken(res);
            console.log(res);
            console.log(localStorage.getItem('token'));
        })
    }else{
      console.log('invalid');
    }
  }
  getToken(res: any) {
    localStorage.setItem('token', res.token);
  }
}
