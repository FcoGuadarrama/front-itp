import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../services/authentication.service";
import {first} from "rxjs";
import {NgxSpinnerService} from "ngx-spinner";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  }

  public error = null;

  constructor(private router: Router,
              private authService: AuthenticationService,
              private spinner: NgxSpinnerService,
              private titleService: Title

  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Login ');
    this.spinner.hide();
  }

  onSubmit(){
    this.spinner.show();
    this.error = null;
    return this.authService.login(this.form.email, this.form.password).pipe(first()).subscribe(
      data => {
        this.spinner.hide();
        this.router.navigate(['admin/panel'])
      }, error => {
        this.error = error.error;
        this.spinner.hide();
      }
    );
  }

}
