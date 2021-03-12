import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrimesService {

  constructor(private http:HttpClient) { }


  getAllCrime(){
    return this.http.get<any>(`${environment.url}/fichiers`)
  }

  deleteCrime(id){
    return this.http.delete(`${environment.url}/fichiers/${id}`)
  }

  getInfoCrime(id){
    return this.http.get(`${environment.url}/fichiers/getAllInformation/${id}`)
  }

  add(data){
    return this.http.post(`${environment.url}/fichiers`, data)
  }

  modifier(data){
    return this.http.put(`${environment.url}/fichiers/modifier`, data)
  }

}
