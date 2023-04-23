import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-trip-item',
  templateUrl: './trip-item.component.html',
  styleUrls: ['./trip-item.component.css']
})
export class TripItemComponent {

  @Input() trip: any;
  @Input() imageBaseUrl: string = '';

  constructor() { }

  ngOnInit(): void {
    this.trip.timeAgo = moment(this.trip.updatedAt).fromNow()
    if (!this.trip.image.startsWith('http')) {
      this.trip.image = this.imageBaseUrl + this.trip.image
    }
  }

}
