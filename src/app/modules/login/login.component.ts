import { LoginCredentialsResponse } from './models/LoginResponse';
import { LoginService } from './services/login.service';
import { StartWithLetterDirective } from './../../shared/validators/start-with-letter.directive';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginCredentials } from './models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public credentials: LoginCredentials = {
    username: '',
    password: '',
    remember: false
  };
  public serverResponse: LoginCredentialsResponse = null;

  public isLoading = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.loginSubject.subscribe(auth => {
      this.serverResponse = auth;
      this.isLoading = false;
    });
  }

  register(): void {
    console.log('Register clicked!');
  }

  forgot(): void {
    console.log('Forgot password clicked!');
  }

  loginSubmit(): void {
    this.isLoading = true;
    this.loginService.loginUser(this.credentials);
    console.log('Login button clicked!', this.credentials);
  }

}
