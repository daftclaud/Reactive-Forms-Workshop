import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.page.html',
  styleUrls: ['./reactive-login.page.scss'],
})
export class ReactiveLoginPage implements OnInit {
  email;
  password;
  constructor() {}

  ngOnInit() {}
}
