import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http : HttpClient) { }

  listUser(){
    return this.http.get<User[]>(`${environment.url}/index`);
  }

  getInfo(){
    return this.http.get<User>(`${environment.url}/info`);
  }

  getCountGP(){
    return this.http.get<number>(`${environment.url}/countgp`);
  }
  deleteUser(id){
    return this.http.delete(`${environment.url}/destroy/${id}`);
  }

  addUser(data){
    return this.http.post(`${environment.url}/register`, data);
  }

  findUser(id){
    return this.http.get<User>(`${environment.url}/findUser/${id}`);
  }

  modifierUser(data){
    return this.http.put(`${environment.url}/update`, data);
  }

  getCountCriminal(){
    return this.http.get<number>(`${environment.url}/countcriminal`);
  }

}
