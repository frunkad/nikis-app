import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    RouterModule
  ]
})
export class DashboardModule { }
