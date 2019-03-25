import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  usernameFormControl = new FormControl('');
  passwordFormControl = new FormControl('');
  constructor(private us: UserService, private router: Router) { }

  ngOnInit() {
  }

  checkLogin() {
    const username = this.usernameFormControl.value;
    const password = this.passwordFormControl.value;
    if (this.us.checkPassword(username, password)) {
      this.us.login(username);
      this.router.navigate(['/', 'dashboard', 'profile']);
    } else {
      alert('Wrong Password');
    }

  }

}
