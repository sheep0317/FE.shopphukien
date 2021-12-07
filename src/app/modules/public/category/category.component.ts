import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

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
    this.productService.getAllProducts().subscribe(
      data => {
        this.products = data.data;
      },
      error => {
        console.log(error);
      }
    );
  }
  refresh(){
    this.getAllProducts();
  }
  priceFilter(minPrice: string, maxPrice: string) {
    if (minPrice.length > 0 && maxPrice.length > 0) {
      this.products = this.products.filter((p: { product_price: number; }) => p.product_price >= +minPrice && p.product_price <= +maxPrice);
    }
    else if (minPrice.length > 0) {
      
      this.products = this.products.filter((p: { product_price: number; }) => p.product_price >= +minPrice);
    }
    else if (maxPrice.length > 0 ) {
     
      this.products = this.products.filter((p: { product_price: number; }) => p.product_price <= +maxPrice);
    }
  }

  Filter(minPrice: string, maxPrice: string, search: string) {
    if(search.length > 0 && (minPrice.length > 0 || maxPrice.length > 0)){
      this.products = this.products.filter((p: { product_name: string; }) => p.product_name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
      this.priceFilter(minPrice, maxPrice);
    }else if(search.length > 0){
      this.products = this.products.filter((p: { product_name: string; }) => p.product_name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    }else if(minPrice.length > 0 || maxPrice.length > 0){
      this.priceFilter(minPrice, maxPrice);
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
  search(search: string) {
    if (search) {
      this.products = this.products.filter((p: { product_name: string; }) => p.product_name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    }
    else {
      this.getAllProducts();
    }
  }
}



