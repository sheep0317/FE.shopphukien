import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Res} from 'src/app/models/res.model';

const API_LINK = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  headers = this.getHeaders();
  getHeaders() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders().set('Authorization', 'Bearer ' + token).set('Content-Type', 'application/json') : null;
  }
  getUser(email: any) {
    if (this.headers instanceof HttpHeaders) {
      return this.http.post<Res>(API_LINK + 'user/get', {email: email}, {headers: this.headers});
    } return this.http.post<Res>(API_LINK + 'user/get', {email: email});
  }
  changePassword(changepassForm: any) {
    if (this.headers instanceof HttpHeaders) {
      return this.http.post<Res>(API_LINK + 'user/changePassword', {email: localStorage.getItem('email'), password: changepassForm.newPassword, oldPassword: changepassForm.currentPassword}, {headers: this.headers});
    } return this.http.post<Res>(API_LINK + 'user/changePassword', {email: localStorage.getItem('email'), password: changepassForm.newPassword, oldPassword: changepassForm.currentPassword});
  }
  updateUser(user: any) {
    if (this.headers instanceof HttpHeaders) {
      return this.http.post<Res>(API_LINK + 'user/update', user, {headers: this.headers});
    } return this.http.post<Res>(API_LINK + 'user/update', user);
  }
}
