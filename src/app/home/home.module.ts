import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssetDashboardComponent } from './asset-dashboard/asset-dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [DashboardComponent, AssetDashboardComponent, CustomerComponent, HomeComponent],
  imports: [
    CommonModule
  ],
 
})
export class HomeModule { }
