import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-trip-item',
  templateUrl: './trip-item.component.html',
  styleUrls: ['./trip-item.component.css']
})
export class TripItemComponent {

  // This is the trip object that is passed from the parent component
  @Input() trip: any;

  // This is the base url for the images that is passed from the parent component
  @Input() imageBaseUrl: string = '';

  // This is the constructor
  constructor() { }

  // This method is called when the component is initialized
  ngOnInit(): void {
    // Setting the timeAgo property
    this.trip.timeAgo = moment(this.trip.updatedAt).fromNow()

    // Setting the image property if it is not a full url
    if (!this.trip.image.startsWith('http')) {
      this.trip.image = this.imageBaseUrl + this.trip.image
    }
  }

}
