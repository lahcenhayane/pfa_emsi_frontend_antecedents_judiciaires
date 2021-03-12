import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  saveLoacaleStorage(data){
    localStorage.setItem('userToken', data.userToken);
    localStorage.setItem('userID', data.userID);
    localStorage.setItem('userRole', data.userRole);
    localStorage.setItem('userVille', data.userVille);
  }
  getToken(){
    return localStorage.getItem('userToken');
  }
  getId(){
    return localStorage.getItem('userID');
  }
  getRole(){
    return localStorage.getItem('userRole');
  }
  getName(){
    return localStorage.getItem('userVille');
  }
  removeLocalStorage(){
    localStorage.removeItem('userToken');
    localStorage.removeItem('userID');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userVille');
  }
}
