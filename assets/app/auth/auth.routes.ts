import { Routes } from "@angular/router";

import { AuthenticationComponent } from "./authentication.component";
import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { LogoutComponent } from "./logout.component";

export const AUTH_ROUTES: Routes = [
   // { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: '', pathMatch: 'full', component: AuthenticationComponent },
    //{ path: 'signin', component: SigninComponent },
    //{ path: 'logout', component: LogoutComponent }
];