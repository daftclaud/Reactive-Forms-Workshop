import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.page.html',
  styleUrls: ['./reactive-login.page.scss'],
})
export class ReactiveLoginPage implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(6), Validators.required]]
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  get password() {
    return this.loginForm.controls.password;
  }
}
