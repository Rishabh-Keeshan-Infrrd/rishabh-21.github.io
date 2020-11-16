import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthComponentComponent} from './auth-component/auth-component.component';
import {LoginComponent} from './auth-component/login/login.component';
import {SignUpComponent} from './auth-component/signup/signup.component';
import {DashboardComponent} from './blogger/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'auth', component: AuthComponentComponent,
    children: [
      {
        path: 'signUp',
        component: SignUpComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      }]
  },
  {
    path: 'dashboard', component: DashboardComponent
  }
  // {path: '', redirectTo: '/auth', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
