import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {


  constructor(private _routeService: Router) { }

  ngOnInit(): void {
  }
  logOut(){
    localStorage.clear();
    this._routeService.navigate(['']);
    console.log('logout');
  }
}
