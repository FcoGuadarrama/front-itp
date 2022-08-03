import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  sendData(data) {
    const params = {data: data}
    return this.http.post(this.apiUrl + '/calculate', params);
  }
}
