import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReactiveLoginPageRoutingModule } from './reactive-login-routing.module';

import { ReactiveLoginPage } from './reactive-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReactiveLoginPageRoutingModule
  ],
  declarations: [ReactiveLoginPage]
})
export class ReactiveLoginPageModule {}
