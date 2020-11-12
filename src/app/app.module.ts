import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SignupComponent} from './auth-component/signup/signup.component';
import {AuthComponentComponent} from './auth-component/auth-component.component';
import {LoginComponent} from './auth-component/login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        SignupComponent,
        AuthComponentComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
