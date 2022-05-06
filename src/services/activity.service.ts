import { Activity } from "../app/models/activity";
import { ACTIVITIES } from "../app/data/activity-data";

export class ActivityService {

  constructor() {
  }

  getActivities(): Activity[] {
    return ACTIVITIES;
  }
}
