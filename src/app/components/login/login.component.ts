import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  constructor(  private _router: Router) { }

  loginForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email)
  });

  ngOnInit(): void {
  }

  getSignIn(){
    this._router.navigate(['home']);
    console.log(this.loginForm.value);

  }

}
