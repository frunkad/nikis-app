import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('',[
    Validators.required
  ]);
  constructor() { }

  ngOnInit() {
  }

}
