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
    } return this.http.post<Res>(API_LINK +'bill/createBill', bill);
  }
  getBillById(id: string) {
    const header = this.getHeaders();
    if (header instanceof HttpHeaders) {
      return this.http.post<Res>(API_LINK +'bill/getBill' ,{email: localStorage.getItem('email'), id: id}, { headers: header });
    } return this.http.post<Res>(API_LINK +'bill/getBill' ,{email: localStorage.getItem('email'), id: id});
  }
  getAllBill() {
    const header = this.getHeaders();
    if (header instanceof HttpHeaders) {
      return this.http.get<Res>(API_LINK +'bill/getAll', { headers: header });
    } return this.http.get<Res>(API_LINK +'bill/getAll');
  }
  getBillByEmail() {
    const header = this.getHeaders();
    if (header instanceof HttpHeaders) {
      return this.http.post<Res>(API_LINK +'bill/getBillByEmail/' ,{email: localStorage.getItem('email')}, { headers: header });
    } return this.http.post<Res>(API_LINK +'bill/getBillByEmail/' ,{email: localStorage.getItem('email')});
  }
  deleteBill(id: string) {
    const header = this.getHeaders();
    if (header instanceof HttpHeaders) {
      return this.http.delete<Res>(API_LINK +'bill/deleteBill/' + id, { headers: header });
    } return this.http.delete<Res>(API_LINK +'bill/deleteBill/' + id);
  }
  updateBill(id: string, paid_date: any) {
    const header = this.getHeaders();
    if (header instanceof HttpHeaders) {
      return this.http.patch<Res>(API_LINK +'bill/updateBill', {id: id, paid_date: paid_date}, { headers: header });
    } return this.http.patch<Res>(API_LINK +'bill/updateBill', {id: id, paid_date: paid_date});
  }
  getStatistic() {
    const header = this.getHeaders();
    if (header instanceof HttpHeaders) {
      return this.http.get<Res>(API_LINK +'bill/stat', { headers: header });
    } return this.http.get<Res>(API_LINK +'bill/stat');
  }
}
