import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent {
  loginForm: FormGroup;

  error_messages = {

    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'minlength', message: 'Email length is too short.' },
      { type: 'maxlength', message: 'Invalid Email length.' },
      { type: 'email', message: 'Please enter valid email ID!'}
    ],

    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password length is too short.' },
      { type: 'maxlength', message: 'Password length is too long.' }
    ]
  }

  constructor(
    public formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ])),
    }, { 
      validators: this.password.bind(this)
    });
  }

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
  }

}
