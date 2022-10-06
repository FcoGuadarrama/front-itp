import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isRegistered: boolean = false;

  careers: string[] = [
    "Ingeniería Industrial",
    "Ingeniería Electrónica",
    "Ingeniería Eléctrica",
    "Ingeniería Mecánica",
    "Ingeniería en Tecnologías de la información y comunicaciones",
    "Ingeniería en logística",
    "Ingeniería en gestión empresarial",
    "Licenciatura en administración",
    "Otros"
  ];

  constructor(private _router: Router) { }
  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    age: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(100)
    ]),
    interestedCareer: new FormControl('', Validators.required),
    originSchool: new FormControl('', Validators.required),
    option: new FormControl('', Validators.required),

  });

  ngOnInit(): void {
  }

  getSignIn(){
    this.isRegistered = true;
  }

  get name() { return this.registerForm.get('name'); }
  get lastname() { return this.registerForm.get('lastname'); }
  get email() { return this.registerForm.get('email'); }
  get age() { return this.registerForm.get('age'); }
  get interestedCareer() { return this.registerForm.get('interestedCareer'); }
  get originSchool() { return this.registerForm.get('originSchool'); }

}
