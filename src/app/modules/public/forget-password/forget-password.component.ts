import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Res } from 'src/app/models/res.model';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(public _formBuiler: FormBuilder, private http: HttpClient, private toastr: ToastrService) { }
  forgetPasswordForm = this._formBuiler.group({
    email: ['', [Validators.required, Validators.email] ]
  });
  ngOnInit(): void {
  }
  forgetPassword() {
    this.http.post<Res>('http://localhost:3000/api/user/forgetPassword', this.forgetPasswordForm.value).subscribe(
      data =>{
        console.log(data);
          this.toastr.success('Ban co the tat tab nay', 'Yeu cau thanh cong',{
            timeOut: 5000,
            positionClass: 'toast-top-right',
            progressAnimation: 'decreasing',
            progressBar: true,
          });
        
      },
      err => {
        console.log(err);
        if (err['status'] === 404) {
          this.toastr.warning('Khong tim thay user nay', 'Yeu cau that bai',{
            timeOut: 3000,
            positionClass: 'toast-top-right',
            progressAnimation: 'decreasing',
            progressBar: true,
          });
        }
      }
    )
  }
}
