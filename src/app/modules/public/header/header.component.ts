import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private toastr: ToastrService) { }
  displayName: any
  public isLogin(){
    if(localStorage.getItem('token')){
      return true;
    }
    return false;
  }
  logout(){
    localStorage.clear();
    this.toastr.error('Logout Successfully');

  }
  roleCheck(){
    if(localStorage.getItem('role') == '1'){
      return true;
    }
    return false;
  }
  ngOnInit(): void {
    if(this.isLogin()){
      this.displayName = localStorage.getItem('displayName');
    }
  }

}
