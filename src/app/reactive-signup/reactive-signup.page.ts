import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-reactive-signup',
  templateUrl: './reactive-signup.page.html',
  styleUrls: ['./reactive-signup.page.scss'],
})
export class ReactiveSignupPage implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(6), Validators.required]],
    confirm: ['', [Validators.minLength(6), Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get password() {
    return this.loginForm.controls.password;
  }
  get confirm() {
    return this.loginForm.controls.confirm;
  }

}
