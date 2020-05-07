import { LoginCredentialsResponse } from './../models/LoginResponse';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCredentials } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginSubject: BehaviorSubject<LoginCredentialsResponse> = new BehaviorSubject({ error: null, token: null });

  constructor(private http: HttpClient) {
  }


  loginUser(loginCredentials: LoginCredentials): void {
    this.http.post<any>('http://localhost/3000/auth/login', loginCredentials)
      .pipe(delay(2000)).subscribe(auth => {
        debugger;
        if (auth.token) {
        }
      }, (error) => {
        setTimeout(() => {
          this.loginSubject.next({ error });
        }, (2000));
      });
  }
}
