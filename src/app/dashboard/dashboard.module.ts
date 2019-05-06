import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { MatListModule } from '@angular/material/list';
import { EventsComponent } from './events/events.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    AboutComponent,
    EventsComponent,
    UpcomingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    RouterModule,
    MatListModule
  ]
})
export class DashboardModule { }
