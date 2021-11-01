import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart.model';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }
  shopCart: CartItem[] = [
    {
      id: 1,
      productName: 'Product 1',
      productId: 1,
      price: 100,
    },
    {
      id: 2,
      productName: 'Product 1',
      productId: 2,
      price: 100,
    },
    {
      id: 3,
      productName: 'Product 1',
      productId: 3,
      price: 100,
    },
    {
      id: 4,
      productName: 'Product 1',
      productId: 4,
      price: 100,
    },
    {
      id: 5,
      productName: 'Product 1',
      productId: 5,
      price: 100,
    },
    {
      id: 6,
      productName: 'Product 1',
      productId: 6,
      price: 100,
    },
  ];
  totalPrice=0;
  ngOnInit(): void {
    this.calcTotalPrice();
  }
  deleteItemFromCart(id: number) {
    this.shopCart = this.shopCart.filter(item => item.id !== id)
    this.calcTotalPrice();
    //Delete from wishlist
  }
  calcTotalPrice() {
    this.totalPrice=0;
    for (let i = 0; i < this.shopCart.length; i++) {
      this.totalPrice += this.shopCart[i].price;
    }
  }
  payNow() {}

}

