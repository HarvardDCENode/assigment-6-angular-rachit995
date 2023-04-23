import { Component } from '@angular/core';
import { TripItem } from 'src/types/tripItem';
import { TripService } from './trip.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TripService]
})
export class AppComponent {
  // This is the title of the page
  title = 'Home';

  // This is the current year
  year = new Date().getFullYear();

  // This is the array of trips
  trips: TripItem[] = [];

  // Injecting the TripService
  constructor(private tripService: TripService) { }

  // This is the base url for the images
  imageBaseUrl = ''

  // This method is called when the component is initialized
  ngOnInit() {
    // Calling the listTrips method of the TripService
    this.tripService.listTrips().subscribe(trips => {
      this.trips = trips;
    });
    // Setting the imageBaseUrl
    this.imageBaseUrl = this.tripService.imageUrl
  }
}
