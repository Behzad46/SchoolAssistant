import { Injectable } from '@angular/core';
import { User } from './user';
import { UserNew } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(userInfo: User){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
    return userInfo;
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

  public Member(userInfo: UserNew){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
    return userInfo;
  }
}
