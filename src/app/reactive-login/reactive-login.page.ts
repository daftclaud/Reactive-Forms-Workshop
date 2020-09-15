import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.page.html',
  styleUrls: ['./reactive-login.page.scss'],
})
export class ReactiveLoginPage implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(6)])
  });
  constructor() {}

  ngOnInit() {}
}
