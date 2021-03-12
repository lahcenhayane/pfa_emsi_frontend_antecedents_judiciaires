import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Criminal } from '../models/criminal';

@Injectable({
  providedIn: 'root'
})
export class VictimeService {

  constructor(private http:HttpClient) { }

  getCriminal(){
    return this.http.get<Criminal[]>(`${environment.url}/victime`);
  }

  addCriminal(data){
    return this.http.post(`${environment.url}/victime`, data);
  }

  deleteCrimila(id){
    return this.http.delete(`${environment.url}/victime/${id}`);
  }

  modifierCriminal(data){
    return this.http.put(`${environment.url}/victime/modifier`, data);
  }

  findCriminal(id){
    return this.http.get<Criminal>(`${environment.url}/victime/find/${id}`);
  }

}
