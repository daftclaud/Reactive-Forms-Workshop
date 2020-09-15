import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReactiveSignupPageRoutingModule } from './reactive-signup-routing.module';

import { ReactiveSignupPage } from './reactive-signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReactiveSignupPageRoutingModule
  ],
  declarations: [ReactiveSignupPage]
})
export class ReactiveSignupPageModule {}
