import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Res } from 'src/app/models/res.model';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  url = `http://localhost:3000/api/products/`;
  products : Product[] =[];
  p: number = 1;
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.http.get<Res>(this.url).subscribe(data => {
      var temp = data['data'];
      this.products = temp;
      console.log(this.products);
    });
  }
  refresh(){
    this.getProducts();
  }
  priceFilter(minPrice: string, maxPrice: string) {
    
    if (minPrice && maxPrice) {
      this.products = this.products.filter(p => p.product_price >= +minPrice && p.product_price <= +maxPrice);
    }
    else if (minPrice) {
      
      this.products = this.products.filter(p => p.product_price >= +minPrice);
    }
    else if (maxPrice) {
     
      this.products = this.products.filter(p => p.product_price <= +maxPrice);
    }else{
      this.getProducts();
    }
  }
  getProductDetails() {
    return localStorage.getItem('clicked_productId');
  }
  getProductId(id: String){
    localStorage.setItem('clicked_productId', id.toString());
  }
}



