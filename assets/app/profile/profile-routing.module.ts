import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';
// import { SearchInputComponent } from './components/search-input.component';
// import { SearchListComponent } from './components/search-list.component';

// import { AuthGuard }                from '../auth-guard.service';

const homeRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
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
export class ProfileRouting {}
