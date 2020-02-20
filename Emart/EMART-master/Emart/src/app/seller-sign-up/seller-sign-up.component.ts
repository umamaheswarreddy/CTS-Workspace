import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller-sign-up',
  templateUrl: './seller-sign-up.component.html',
  styleUrls: ['./seller-sign-up.component.css']
})
export class SellerSignUpComponent {
  loginForm: FormGroup;

  error_messages = {
    'uname': [
      { type: 'required', message: 'User Name is required.' }
    ],

    'cname': [
      { type: 'required', message: 'Company Name is required.' }
    ],

    'gst': [
      { type: 'required', message: 'GSTIN is required.' },
      { type: 'minlength', message: 'GSTIN is too short.' },
    ],

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
    ],
    'confirmpassword': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password length is too short. ' },
      { type: 'maxlength', message: 'Password length is too long.' }
    ],
  }

  constructor(
    public formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      uname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      cname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      gst: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(15)
      ])),
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
      confirmpassword: new FormControl('', Validators.compose([
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
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

}
