import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CriminalService {

  constructor(private http:HttpClient) { }

  getCriminal(){
    return this.http.get<any>(`${environment.url}/criminals`);
  }

  addCriminal(data){
    return this.http.post(`${environment.url}/criminals`, data);
  }

  deleteCrimila(id){
    return this.http.delete(`${environment.url}/criminals/${id}`);
  }

  modifierCriminal(data){
    return this.http.put(`${environment.url}/criminals/modifier`, data);
  }

  findCriminal(id){
    return this.http.get<any>(`${environment.url}/criminals/find/${id}`);
  }
}
