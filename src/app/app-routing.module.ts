import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './dashboard/about/about.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { EventsComponent } from './dashboard/events/events.component';
import { UpcomingComponent } from './dashboard/upcoming/upcoming.component';

const routes: Routes = [
  {
    'path': 'login',
    'component': LoginComponent
  },
  {
    'path': 'dashboard',
    'component': DashboardComponent,
    'children': [
      { 'path': 'about', 'component': AboutComponent },
      { 'path': 'profile', 'component': ProfileComponent },
      { 'path': 'events', 'component': EventsComponent },
      { 'path': 'upcoming', 'component': UpcomingComponent },
      { 'path': '', 'component': ProfileComponent }
    ]
  },
  {
    'path': '**',
    'redirectTo': 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
