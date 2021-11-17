import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Res } from 'src/app/models/res.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  constructor(private http: HttpClient) { }
  @Input() id: any;
  product!: Product;
  ngOnInit(): void {
    this.getProduct();
    console.log(this.product);
  }
  getProduct() {
    this.http.get<Res>(`http://localhost:3000/api/products/${this.id}`)
      .subscribe(res => {
        this.product = res.data;
      }
    )
  }
  addToCart() {
    
  }
}
