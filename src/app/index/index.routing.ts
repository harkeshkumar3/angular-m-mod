import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { IndexComponent } from './index.component';
import { LoginGuard } from '../guards/login.guard';


export const IndexRoutes: Route[] = [
  {
    path: '',
    component: IndexComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent,
        
      }
    
    ]
    
  }
 
];