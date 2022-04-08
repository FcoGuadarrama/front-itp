import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public rows: any = [{
    id: Number,
    activity: String,
  }];

  constructor() { }

  form = new FormGroup({});

  ngOnInit(): void {
    this.rows = [
      {
        id: 1,
        activity: 'Diseñar programas de computación y explorar nuevas aplicaciones tecnológicas para uso del internet',
      },
      {
        id: 2,
        activity: 'Criar, cuidar y tratar aninamles domésticos y de campo',
      },
      {
        id: 3,
        activity: 'Investigar sobre áreas verdes, medio ambiente y cambios climáticos',
      },
      {
        id: 4,
        activity: 'Ilustrar, dibujar y animar digitalmente',
      },
      {
        id: 5,
        activity: 'Seleccionar, capacitar y motivar al personal de una organización/empresa',
      },
      {
        id: 6,
        activity: 'Realizar excavaciones para descubrir restos del pasado',
      },
      {
        id: 7,
        activity: 'Resolver problemas de cálculo para construir un puente',
      },
      {
        id: 8,
        activity: 'Diseñar cursos para enseñar a la gente sobre temas de salud e higiene',
      },
      {
        id: 9,
        activity: 'Tocar un instrumento y componer música',
      },
      {
        id: 10,
        activity: 'Planificar cuáles son las metas deuna organización pública o privada a mediano y largo plazo',
      }
    ];
    for (let i = 1; i <= this.rows.length; i++){
      this.form.addControl(i.toString(), new FormControl('', Validators.required))
    }
  }

  print(){
    console.log(this.form.value);
  }

}
