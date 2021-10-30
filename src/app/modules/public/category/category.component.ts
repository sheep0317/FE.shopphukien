import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  url = `assets/cate.json`;
  products : Product[] =[];
  p: number = 1;
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.http.get<Product[]>(this.url).subscribe(data => {
      this.products = data;
      console.log(this.products);
    });
  }
  refresh(){
    this.getProducts();
  }
  priceFilter(minPrice: string, maxPrice: string) {
    
    if (minPrice && maxPrice) {
      this.products = this.products.filter(p => p.price >= +minPrice && p.price <= +maxPrice);
    }
    else if (minPrice) {
      
      this.products = this.products.filter(p => p.price >= +minPrice);
    }
    else if (maxPrice) {
     
      this.products = this.products.filter(p => p.price <= +maxPrice);
    }else{
      this.getProducts();
    }
  }
}



