import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../../services/authentication.service";
import {HttpService} from "../../../http.service";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent  implements OnInit {

  user = JSON.parse(localStorage.getItem('user'));
  aspirantes: any;

  constructor(
    private authService: AuthenticationService,
    private http: HttpService,
  ) {
  }

  ngOnInit(): void {
    this.http.getAspirantes().subscribe(res => {
      this.aspirantes = res;
      console.log(res);
    });

  }

  hola(){
    console.log(this.user);
  }

  logOut() {
    this.authService.logout();
  }


}
