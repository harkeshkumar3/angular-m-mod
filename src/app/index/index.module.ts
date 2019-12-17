import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetComponent } from './forget/forget.component';
import { IndexComponent } from './index.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './index.material.module';



@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgetComponent,IndexComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class IndexModule { }
