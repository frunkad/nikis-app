import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { SigninComponent } from './signin/signin.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatGridListModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule { }
