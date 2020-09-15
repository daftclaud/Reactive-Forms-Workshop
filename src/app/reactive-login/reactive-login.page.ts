import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.page.html',
  styleUrls: ['./reactive-login.page.scss'],
})
export class ReactiveLoginPage implements OnInit {
  email = new FormControl('', Validators.required);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  constructor() {}

  ngOnInit() {}
}
