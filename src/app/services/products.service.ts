import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Res} from 'src/app/models/res.model';
const API_LINK = 'http://localhost:3000/api/products';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getHeaders() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders().set('Authorization', 'Bearer ' + token).set('Content-Type', 'application/json') : null;
  }

  getProducts(){
    return this.http.get<Res>(API_LINK);
  }
}
