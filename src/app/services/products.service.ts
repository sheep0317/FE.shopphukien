import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Res} from 'src/app/models/res.model';

const API_LINK = 'http://localhost:3000/api/';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getHeaders() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders().set('Authorization', 'Bearer ' + token).set('Content-Type', 'application/json') : null;
  }

  getAllProducts(){
    return this.http.get<Res>(API_LINK + 'products');
  }
  getProductById(id: any){
    return this.http.get<Res>(API_LINK + 'products/' + id);
  }
  updateProduct(id: any, data: any){
    const headers = this.getHeaders();
    if (headers instanceof HttpHeaders) {
      return this.http.put<Res>(API_LINK + 'products/update/' + id, data, {headers: headers});
    } return this.http.put<Res>(API_LINK + 'products/update/' + id, data);
  }
  deleteProduct(id: any){
    const headers = this.getHeaders();
    if (headers instanceof HttpHeaders) {
      return this.http.delete<Res>(API_LINK + 'products/delete/' + id, {headers: headers});
    } return this.http.delete<Res>(API_LINK + 'products/delete/' + id);
  }
  addProduct(data: any){
    const headers = this.getHeaders();
    if (headers instanceof HttpHeaders) {
      return this.http.post<Res>(API_LINK + 'products/add', data, {headers: headers});
    } return this.http.post<Res>(API_LINK + 'products/add', data);
  }
}
