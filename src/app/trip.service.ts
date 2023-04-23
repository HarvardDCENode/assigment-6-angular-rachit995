import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TripItem } from 'src/types/tripItem';


@Injectable({
  providedIn: 'root'
})
export class TripService {

  // Getting the apiUrl from the environment file
  private apiUrl = environment.apiUrl;

  // This is the base url for the images
  imageUrl = this.apiUrl;

  // Injecting the HttpClient
  constructor(private http: HttpClient) { }

  // This method returns an observable of an array of TripItems
  listTrips(): Observable<TripItem[]> {
    return this.http.get<TripItem[]>(this.apiUrl + '/api/trip');
  }
}
