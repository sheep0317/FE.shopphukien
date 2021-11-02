import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private _routeService: Router) { }

  ngOnInit(): void {
  }
  logOut(){
    localStorage.removeItem('token');
    this._routeService.navigate(['']);
    console.log('logout');
  }
}
