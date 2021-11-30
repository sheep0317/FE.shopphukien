import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(public _formBuiler: FormBuilder, private http: HttpClient) { }
  forgetPasswordForm = this._formBuiler.group({
    email: ['', [Validators.required, Validators.email] ]
  });
  ngOnInit(): void {
  }
  forgetPassword() {
    console.log(this.forgetPasswordForm.value);
    this.http.post('http://localhost:3000/api/user/forgetPassword', this.forgetPasswordForm.value).subscribe(
      data =>{
        console.log(data);
      },
      err => {
        console.log(err);
      }
    )
  }
}
