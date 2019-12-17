import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { HomeModule } from './home/home.module';
import { IndexModule } from './index/index.module';
import { NoPageModule } from './no-page/no-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    IndexModule, 
    NoPageModule,
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserAnimationsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
