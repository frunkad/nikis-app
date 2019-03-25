import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/shared/data/users';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  student: User;
  constructor(private us: UserService) { }

  ngOnInit() {
    this.student = this.us.getUserDetails(this.us.getCurrentUser());
  }

  ngOnDestroy() {
    this.student = null;
  }

}
