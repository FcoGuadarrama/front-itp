import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {User} from "../app/models/user.model";
import {Payload} from "../app/models/payload.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getToken() {
    if (localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user')).token;
    }
    return  false;
  }

  isTokenValid() {
    const token = this.getToken();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return payload.iss === environment.apiUrl + 'login';
      }
    }
    return false;
  }


  getUser(): User {
    const user = localStorage.getItem('user');
    return JSON.parse(user);
  }

  private payload(token: string): Payload {
    console.log(token);
    const payload = token.split('.')[1];
    return this.decodePayload(payload);
  }

  private decodePayload(payload: string): Payload {
    return JSON.parse(atob(payload));
  }


}
