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
  title = 'Home';
  year = new Date().getFullYear();

  trips: TripItem[] = [];

  constructor(private tripService: TripService) { }

  imageBaseUrl = ''

  ngOnInit() {
    this.tripService.listTrips().subscribe(trips => {
      this.trips = trips;
    });
    this.imageBaseUrl = this.tripService.imageUrl
  }
}
