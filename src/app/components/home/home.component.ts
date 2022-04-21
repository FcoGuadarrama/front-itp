import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ActivityService} from "../../services/activity.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public rows: any = [];

  constructor(
    private _router: Router,
    private activityService: ActivityService,
  ) { }

  form = new FormGroup({});

  ngOnInit(): void {

    this.rows = this.activityService.getActivities();

    for (let i = 1; i <= this.rows.length; i++){
      this.form.addControl(i.toString(), new FormControl('', Validators.required))
    } 
  }

  print(){
    console.log(this.form.value);
    this._router.navigate(['results']);
  }

}
