import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable({

  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient ) { }

  const API_URL='http://localhost:8080/trabajos/api/test/';
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

}
