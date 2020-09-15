import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveSignupPage } from './reactive-signup.page';

const routes: Routes = [
  {
    path: '',
    component: ReactiveSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactiveSignupPageRoutingModule {}
