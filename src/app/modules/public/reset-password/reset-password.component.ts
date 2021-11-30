import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private route: ActivatedRoute, private http:HttpClient, public formBuilder: FormBuilder) { }
  bankName!: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.bankName = paramMap.get('token');
      console.log(this.bankName);
    });
  }
  resetPassword() {
    console.log(this.restPasswordForm.value);
  }

}
