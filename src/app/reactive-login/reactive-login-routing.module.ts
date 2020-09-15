import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveLoginPage } from './reactive-login.page';

const routes: Routes = [
  {
    path: '',
    component: ReactiveLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactiveLoginPageRoutingModule {}
