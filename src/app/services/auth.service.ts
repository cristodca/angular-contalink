import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isActive: Boolean = false
  private user: User = {
    email: '',
    pass: '',
    jwt: ''
  }

  constructor(private http: HttpClient) { }

  login(email: string, pass: string): Observable<User> {
    let params: HttpParams = new HttpParams().append('username', email).append('password', pass);

    this.isActive = true;

    return this.http.post<User>(`${environment.api}/login`, {}, {params});
  }

  setUser(user: User) {
    this.user = user
  }
  getUser() {
    return this.user
  }
}
