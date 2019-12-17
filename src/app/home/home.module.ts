import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssetDashboardComponent } from './asset-dashboard/asset-dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../common/header/header.component';
import { LeftMenuComponent } from '../common/left-menu/left-menu.component';
import { HomeMaterialModule } from './home.material.module';



@NgModule({
  declarations: [DashboardComponent, AssetDashboardComponent, CustomerComponent, HomeComponent,
  HeaderComponent, LeftMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    HomeMaterialModule
    
    
  ],
  exports: [HomeComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
 
})
export class HomeModule { }
