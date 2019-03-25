import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  sheet: 'login' | 'register' | null;

  constructor() { }

  ngOnInit() {
    this.sheet = 'login';
  }

}
