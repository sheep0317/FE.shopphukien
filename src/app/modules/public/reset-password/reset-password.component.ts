import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Res } from 'src/app/models/res.model';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  restPasswordForm = this.formBuilder.group({
    password: [''],
    confirmPassword: [''],
  });
  constructor(private route: ActivatedRoute, private http:HttpClient, public formBuilder: FormBuilder, private toastr: ToastrService, private router: Router) { }
  token!: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.token = paramMap.get('token');
      console.log(this.token);
    });
  }
  resetPassword() {
    const API = "http://localhost:3000/api/user/resetPassword/"
    const body = {
      password: this.restPasswordForm.value.password,
      token: this.token
    }
    this.http.post<Res>(API, body).subscribe(
      data =>{
        this.toastr.success('Password changed successfully',"Success", {
          timeOut: 3000,
          positionClass: 'toast-top-right',
          progressBar: true,
          progressAnimation: 'decreasing',
        });
        setTimeout(() => {
          window.location.href = "/login";
        } , 3000);
      },
      err =>{
        console.log(err);
        if (err['status']===400) {
          this.toastr.error('Xin thu lai',"Error", {
            timeOut: 3000,
            positionClass: 'toast-top-center',
            progressBar: true,
            progressAnimation: 'decreasing',
          });
        }
      }
    )
  }

}
