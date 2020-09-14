import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateLoginPage } from './template-login.page';

const routes: Routes = [
  {
    path: '',
    component: TemplateLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateLoginPageRoutingModule {}
