import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

 import { ProfileComponent } from './profile.component';
 import { SearchInputComponent } from './components/search-input.component';
 import { SearchComponent } from './components/search-list.component';

import { AuthGuard } from '../_guards/auth.guard';
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';
import { SearchService } from '../_services/search.service';
import { ProfileRouting } from './profile-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProfileRouting,
    FormsModule,
     HttpModule,
    JsonpModule,
    ReactiveFormsModule
  ],
  declarations: [
     ProfileComponent,
     SearchInputComponent,
     SearchComponent
  ],
  providers: [ AuthGuard, AuthenticationService, UserService, SearchService ],
  exports:[
     ProfileComponent,
     SearchInputComponent,
     SearchComponent
  ]
})
export class ProfileModule {}

