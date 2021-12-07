import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }
  roleCheck(){
    if(localStorage.getItem('role') == '1'){
      return true;
    }
    return false;
  }

}

