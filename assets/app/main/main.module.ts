import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { MainComponent } from './main.component';
import { SigninComponent } from './components/signin.component';
import { SignupComponent } from './components/signup.component';


import { AuthGuard } from '../_guards/auth.guard';
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
     HttpModule,
    JsonpModule,
    ReactiveFormsModule
  ],
  declarations: [
    MainComponent,
    SigninComponent,
    SignupComponent
  ],
  providers: [ AuthGuard, AuthenticationService, UserService ],
  exports:[
    MainComponent,
    SigninComponent,
    SignupComponent
  ]
})
export class MainModule {}

