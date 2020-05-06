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

  // public credentialForm: any = new FormGroup({
  //   name: new FormControl(this.credentials.username, [
  //     Validators.required,
  //     Validators.minLength(4),
  //   ])
  // });



  constructor() { }

  ngOnInit() {
  }

  register(): void {
    console.log('Register clicked!');
  }

  forgot(): void {
    console.log('Forgot password clicked!');
  }

  loginClick(): void {
    console.log('Login button clicked!');
  }

}
