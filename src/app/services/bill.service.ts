import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Res} from 'src/app/models/res.model';

const API_LINK = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient) { }
  getHeaders() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders().set('Authorization', 'Bearer ' + token).set('Content-Type', 'application/json') : null;
  }
  createBill(bill: any) {
    const header = this.getHeaders();
    if (header instanceof HttpHeaders) {
      return this.http.post<Res>(API_LINK +'bill/createBill', bill, { headers: header });
    }
    return this.http.post<Res>(API_LINK +'bill/createBill', bill);
  }
}
