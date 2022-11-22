import {Component, ViewChild,} from '@angular/core';
import {HttpService} from "../http.service";
import {Aspirante} from "../models/aspirante";
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from "@angular/material/table";
import {first} from "rxjs";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent {

  dataSource: MatTableDataSource<Aspirante>;
  displayedColumns: string[] = ['id', 'name', 'email', 'age',  'option',  'interestedCareer',  'originSchool', 'college_area', 'created_at'];
  results: Aspirante[];
  apiUrl = environment.apiUrl;


  @ViewChild(MatPaginator) paginator: MatPaginator;

  aspirantes: Aspirante;
  data: any;

  constructor(public http: HttpService) {
  }

  ngOnInit(): void {
    this.http.getAspirantes().pipe(first()).subscribe((data: Aspirante[]) => {
      this.dataSource = new MatTableDataSource<Aspirante>(data);
      this.dataSource.paginator = this.paginator;
    });
  }


}
