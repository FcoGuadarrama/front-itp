import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null

  }

  public error = null;

  constructor(
              private titleService: Title,
              private authService: AuthenticationService

  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Registrarse ');
    
  }

  onSubmit(){ 
    return this.authService.signup(this.form).subscribe(
      data=>{
        alert('usuario agregado');
      }, error => {
        this.error=error.error;
      }
    );
    
  }

}
