import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {HttpService} from "../http.service";
import {Aspirante} from "../models/aspirante";

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent {

  aspirantes: Aspirante;
  displayedColumns: string[] = ['id', 'name', 'email', 'results'];
  dataSource: any;


  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({matches}) => {
      if (matches) {
        return [
          {title: 'Resultados', cols: 1, rows: 1},
          {title: 'Card 2', cols: 1, rows: 1},
          {title: 'Card 3', cols: 1, rows: 1},
          {title: 'Card 4', cols: 1, rows: 1}
        ];
      }

      return [
        {title: 'Resultados', cols: 2, rows: 1},
        {title: 'Card 2', cols: 1, rows: 1},
        {title: 'Card 3', cols: 1, rows: 2},
        {title: 'Card 4', cols: 1, rows: 1}
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
              public http: HttpService) {
  }

  ngOnInit(): void {
    this.http.getAspirantes().subscribe(res => {
      this.dataSource = res;
      console.log(res);
    });
  }

}
