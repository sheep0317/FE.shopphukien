import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Res} from 'src/app/models/res.model';
const AUTH_API = 'http://localhost:3000/api/user/';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(credentials: any): Observable<any> {
    console.log(credentials)
    return this.http.post<Res>(AUTH_API + 'login', {
      email: credentials.loginEmail,
      password: credentials.loginPassword
    });
  }

  register(credentials: any): Observable<any> {
    return this.http.post<Res>(AUTH_API + 'register', {
      email: credentials.email,
      displayname: credentials.displayname,
      password: credentials.password,
      address: credentials.address,
      gender: credentials.gender,
      phone: credentials.phone
    });
  }
}
