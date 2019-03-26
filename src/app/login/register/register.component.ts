import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  usernameFormControl = new FormControl('');
  nameFormControl = new FormControl('');
  passwordFormControl = new FormControl('');
  password2FormControl = new FormControl('');

  constructor(private us: UserService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    const password = this.passwordFormControl.value;
    const password2 = this.password2FormControl.value;
    const username = this.usernameFormControl.value;
    const name = this.nameFormControl.value;
    if (password2 !== password) {
      alert('Passwords don\'t match');
    } else {
      this.us.addUser(username, password, name);
      this.us.login(username);
      this.router.navigate(['/', 'dashboard', 'profile']);
    }
  }

}
