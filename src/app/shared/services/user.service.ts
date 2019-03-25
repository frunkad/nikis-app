import { Injectable } from '@angular/core';
import { User, users } from '../data/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUserDetails(uid: string) {
    if (users[uid]) {
      return users[uid];
    } else {
      return false;
    }
  }

  userExists(uid: string) {
    return !!users[uid];
  }

  checkPassword(uid: string, pass: string) {
    return (this.userExists(uid) && users[uid]['password'] === pass);
  }

  getCurrentUser() {
    return localStorage.getItem('currentUser');
  }

  login(uid: string) {
    localStorage.setItem('currentUser', uid);
  }

  logout() {
    localStorage.setItem('currentUser', '');
  }
}
