import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-slr-productlist',
  templateUrl: './slr-productlist.component.html',
  styleUrls: ['./slr-productlist.component.css']
})
export class SlrProductlistComponent implements OnInit {
  p: number = 1;
  products: any = [];
  addProductForm = this._formBuilder.group({
    product_name: ['', Validators.required],
    product_price: ['', Validators.required],
    product_description: ['', Validators.required],
    product_image: ['', Validators.required],
    product_brand: ['', Validators.required],
    product_type: ['', Validators.required],
    product_quantity: ['', Validators.required],
  });
  clickedProduct: any = {
    productid: '',
    product_price: '',
    product_quantity: ''
  };
  constructor(private productService: ProductsService, public _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this.productService.getAllProducts().subscribe(
      (data: any) => {
        this.products = data['data'];
        console.log(this.products);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  updateProduct(id: string, price: any, product_quantity: any) {
    var data = {
      product_price: price,
      product_quantity: product_quantity
    }
    var productid = parseInt(id);
    this.productService.updateProduct(productid, data).subscribe(
      data => {
        console.log(data);
        this.getAllProducts();
      },
      error => {
        console.log(error);
      }
    )
  }
  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(
      data => {
        console.log(data);
        this.getAllProducts();
      },
      error => {
        console.log(error);
      }
    );
  }
  addProduct() {
    this.productService.addProduct(this.addProductForm.value).subscribe(
      data => {
        console.log(data);
        this.getAllProducts();
      },
      error => {
        console.log(error);
      }
    )
  }
  clickedId(id: string) {
    if(this.products.length > 0) {
      this.products.forEach((element: { productid: string; }) => {
        if(element.productid == id) {
          this.clickedProduct = element;
        }
      });
    }
  }
}
