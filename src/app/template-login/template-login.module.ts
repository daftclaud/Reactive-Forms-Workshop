import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemplateLoginPageRoutingModule } from './template-login-routing.module';

import { TemplateLoginPage } from './template-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemplateLoginPageRoutingModule
  ],
  declarations: [TemplateLoginPage]
})
export class TemplateLoginPageModule {}
