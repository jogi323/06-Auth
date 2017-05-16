import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AppRouting } from './app.routing';

import { PageNotFoundComponent } from './not-found.component';
import { MainModule } from './main/main.module';
import { ProfileModule } from './profile/profile.module';
import { AuthGuard } from './_guards/auth.guard';
import { AlertService } from './_services/alert.service';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { SearchService } from './_services/search.service';
import { HeaderComponent } from './header.component'

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        MainModule,
        ProfileModule,
        AppRouting
    ],
    providers: [AuthGuard, AlertService, AuthenticationService, UserService, SearchService],
    bootstrap: [AppComponent]
})
export class AppModule {

}