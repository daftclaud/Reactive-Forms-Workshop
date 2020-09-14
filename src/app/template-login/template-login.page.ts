import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-login',
  templateUrl: './template-login.page.html',
  styleUrls: ['./template-login.page.scss'],
})
export class TemplateLoginPage implements OnInit {

  email: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

}
