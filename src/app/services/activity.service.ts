import { Activity } from "../models/activity";
import { ACTIVITIES } from "../data/activity-data";

export class ActivityService {

  constructor() {
  }

  getActivities(): Activity[] {
    return ACTIVITIES;
  }
}
