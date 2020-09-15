import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'template-login',
    pathMatch: 'full'
  },
  {
    path: 'template-login',
    loadChildren: () => import('./template-login/template-login.module').then( m => m.TemplateLoginPageModule)
  },
  {
    path: 'reactive-login',
    loadChildren: () => import('./reactive-login/reactive-login.module').then( m => m.ReactiveLoginPageModule)
  },
  {
    path: 'reactive-signup',
    loadChildren: () => import('./reactive-signup/reactive-signup.module').then( m => m.ReactiveSignupPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
