import { Component, Input, OnInit } from '@angular/core';
import { Res } from 'src/app/models/res.model';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  constructor(private productService: ProductsService, private route: ActivatedRoute, private cartService: CartService, private toastr: ToastrService) { }
  product: any = {};
  id :any;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this. id = params['id'];
      console.log(this.id);
    })
    this.getProduct();

  }
  getProduct() {
    this.productService.getProductById(this.id).subscribe(
      (res: Res) => {
        this.product = res.data;
        console.log(this.product);
      },
      err => {
        console.log(err);
      }
    );
  }
  addToCart(quantity: string) {
    if (quantity == '') {
      alert('Please enter quantity');
    }
    this.cartService.addToCart(this.product.productid, quantity).subscribe(
      (res: Res) => {
        console.log(res);
        window.location.reload();
      },
      err => {
        console.log(err);
        if(err.status == 409){
          this.toastr.error('Da co trong gio hang', 'Error');
        }
        if(err.status == 401){
          this.toastr.error('Chua dang nhap', 'Error');
        }
      }
    );
  }
}
