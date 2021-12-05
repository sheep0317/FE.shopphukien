import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email: any = localStorage.getItem('emailLogin');
  constructor() { }
  public isLogin(){
    return localStorage.getItem('token') != null;
  }
  logout(){
    localStorage.clear();
  }
  ngOnInit(): void {
  }

}
