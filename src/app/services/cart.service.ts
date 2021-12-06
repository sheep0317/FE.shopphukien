import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Res} from 'src/app/models/res.model';

const API_LINK = 'http://localhost:3000/api/';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  getHeaders() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders().set('Authorization', 'Bearer ' + token).set('Content-Type', 'application/json') : null;
  }
  addToCart(id: number, quantity: string) {
    const header = this.getHeaders();
    console.log(header);
    if (header instanceof HttpHeaders) {
      return this.http.post<Res>(API_LINK + 'cart', {product_id: id, email: localStorage.getItem('email'), product_quantity: quantity}, {headers: header});
    }
    return this.http.post<Res>(API_LINK + 'cart', {product_id: id, email: localStorage.getItem('email'), product_quantity: quantity});
  }
  getCart() {
    const header = this.getHeaders();
    if (header instanceof HttpHeaders) {
      return this.http.post<Res>(API_LINK + 'cart/getCart', {email: localStorage.getItem('email')},{headers: header});
    }
    return this.http.post<Res>(API_LINK + 'cart',{email: localStorage.getItem('email')});
  }
  deleteFromCart(id: number) {
    const header = this.getHeaders();
    if (header instanceof HttpHeaders) {
      return this.http.post<Res>(API_LINK + 'cart/delete', {product_id: id, email: localStorage.getItem('email')}, {headers: header});
    }
    return this.http.post<Res>(API_LINK + 'cart/delete', {product_id: id, email: localStorage.getItem('email')});
  }
  updateCart(id: number, quantity: string) {
    const header = this.getHeaders();
    if (header instanceof HttpHeaders) {
      return this.http.post<Res>(API_LINK + 'cart/update', {id: id, email: localStorage.getItem('email'), product_quantity: quantity}, {headers: header});
    }
    return this.http.post<Res>(API_LINK + 'cart/update', {id: id, email: localStorage.getItem('email'), product_quantity: quantity});
  }
  clearCart() {
    const header = this.getHeaders();
    if (header instanceof HttpHeaders) {
      return this.http.post<Res>(API_LINK + 'cart/clearCart', {email: localStorage.getItem('email')}, {headers: header});
    }
    return this.http.post<Res>(API_LINK + 'cart/clearCart', {email: localStorage.getItem('email')});
  }

}
