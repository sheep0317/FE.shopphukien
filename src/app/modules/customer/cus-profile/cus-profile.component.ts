import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-cus-profile',
  templateUrl: './cus-profile.component.html',
  styleUrls: ['./cus-profile.component.css']
})
export class CusProfileComponent implements OnInit {
  userInformation: any = {};
  changepassForm = this._formBuilder.group({
    currentPassword: ['', [Validators.required, Validators.minLength(6)]],
    newPassword: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  })
  constructor(public _formBuilder: FormBuilder, private userService: UserService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.getProfile()
  }
  changePassword(){
    this.userService.changePassword(this.changepassForm.value).subscribe(
      data =>{
        console.log(data)
      },
      err => {
        console.log(err)
      }
    )
  }
  editProfile(phone: string, gender: string, address: string, displayName: string){
    const user = {
      displayname: displayName,
      address: address,
      gender: gender,
      phone: phone,
      email: localStorage.getItem('email')
    }
    console.log(user)
    this.userService.updateUser(user).subscribe(
      data => { 
        window.location.reload();
      },
      err => {
        console.log(err)
        this.toastr.error('Error', 'Error')
      }
    )
  }
  getProfile(){
    this.userService.getUser(localStorage.getItem('email')).subscribe(
      data => {
        this.userInformation = data['data']
        console.log(this.userInformation)
      },
      err => {
        console.log(err)
      }
    )
  }
}
