import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ActivityService} from "../../../services/activity.service";
import {PageEvent} from "@angular/material/paginator";
import {HttpService} from "../../http.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  public rows: any = [];
  page_size: any;
  page_number: any;

  constructor(
    private _router: Router,
    private activityService: ActivityService,
    private http: HttpService
  ) { }

  form = new FormGroup({});

  ngOnInit(): void {

    this.rows = this.activityService.getActivities();

    for (let i = 1; i <= this.rows.length; i++){
      this.form.addControl(i.toString(), new FormControl('', Validators.required))
    }
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  print(){
   let array = Object.values(this.form.value).filter(obj => obj > 0);
   this.http.sendData(Object.values(array)).subscribe(res => {
       console.log(Object.values(res)[0]);
   });
  //  console.log(this.form.value);
    //this._router.navigate(['results']);
  }

}
