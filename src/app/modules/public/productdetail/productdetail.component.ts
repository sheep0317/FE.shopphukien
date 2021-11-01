import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  constructor() { }
  @Input() product : any ;
  
  ngOnInit(): void {
  }
  addToCart() {
    console.log(this.product);
  }
}
