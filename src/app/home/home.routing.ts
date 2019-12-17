import { Route } from '@angular/router';

import { HomeComponent } from './home.component';
import { AssetDashboardComponent } from './asset-dashboard/asset-dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../guards/auth.guard';

export const HomeRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path: 'asset-dashboard',
        component: AssetDashboardComponent,
        
      }, {
        path: 'customer',
        component: CustomerComponent,
        
      }, {
        path: 'dashboard',
        component: DashboardComponent,
        
      }
    ]
    
  }
  

];