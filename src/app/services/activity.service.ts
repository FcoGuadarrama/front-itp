import { Activity } from "../models/activity";
import { ACTIVITIES } from "../data/activity-data";
import { Injectable } from '@angular/core';

@Injectable()
export class ActivityService {

  constructor() {
  }

  getActivities(): Activity[] {
    return ACTIVITIES;
  }
}
