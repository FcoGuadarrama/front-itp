import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
    }),
  };


  sendData(data, person) {
    const params = {data: data, person: person};
    return this.http.post<any>(`${environment.apiUrl}calculate`, params);
  }

  getAspirantes(){
    return this.http.get<any>(`${environment.apiUrl}aspirante`);
  }

  export(){
    return this.http.get<any>(`${environment.apiUrl}exportar?token=${localStorage.getItem('token')}`);
  }

}
