import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { SigninComponent } from './components/signin.component';
import { SignupComponent } from './Components/signup.component';

// import { AuthGuard }                from '../auth-guard.service';

const homeRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '', // component: HomeComponent,
        children: [
          //{ path: '', component: ProfileComponent },
          //{ path: 'home', component: HomeComponent },
          //{ path: 'login', component: LoginComponentComponent },
          //{ path: 'signup', component: SignupComponentComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {}
