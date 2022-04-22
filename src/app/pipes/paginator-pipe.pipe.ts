import { Pipe, PipeTransform } from '@angular/core';
import {Activity} from "../models/activity";

@Pipe({
  name: 'paginator'
})
export class PaginatorPipePipe implements PipeTransform {

  transform(activities: Activity[], page_size: number, page_number: number): Activity[] {
    if (!activities.length) return [];

    page_size = page_size || 10;
    page_number = page_number || 1;

    --page_number;

    return activities.slice(page_number * page_size, (page_number + 1) * page_size);
  }
}
