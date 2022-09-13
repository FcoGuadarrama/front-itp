import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../../services/authentication.service";
import {Observable} from "rxjs";
import {map, shareReplay} from "rxjs/operators";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent  implements OnInit {

  user = JSON.parse(localStorage.getItem('user'));
  aspirantes: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private authService: AuthenticationService,
  ) {
  }

  ngOnInit(): void {
  }

  logOut() {
    this.authService.logout();
  }


}
