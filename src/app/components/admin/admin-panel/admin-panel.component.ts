import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../../services/authentication.service";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent  implements OnInit {

  constructor(
    private authService: AuthenticationService,
  ) {
  }

  ngOnInit(): void {
  }

  logOut() {
    this.authService.logout();
  }


}
