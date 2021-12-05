import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.model';
import { Res } from 'src/app/models/res.model';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  products:any;
  p: number = 1;
  constructor(private productService: ProductsService) { }
  ngOnInit(): void {
    this.getAllProducts();
  }
  
  getAllProducts() {
    this.productService.getProducts().subscribe(
      data => {
        this.products = data.data;
      },
      error => {
        console.log(error);
      }
    );
  }
  priceFilter(minPrice: string, maxPrice: string) {
    if (minPrice && maxPrice) {
      this.products = this.products.filter((p: { product_price: number; }) => p.product_price >= +minPrice && p.product_price <= +maxPrice);
    }
    else if (minPrice) {
      
      this.products = this.products.filter((p: { product_price: number; }) => p.product_price >= +minPrice);
    }
    else if (maxPrice) {
     
      this.products = this.products.filter((p: { product_price: number; }) => p.product_price <= +maxPrice);
    }else{
      this.getAllProducts();
    
    }
  }
  getProductDetails() {
    return localStorage.getItem('clicked_productId');
  }
  getProductId(id: String){
    localStorage.setItem('clicked_productId', id.toString());
    console.log(localStorage.getItem('clicked_productId'));
  }
}



