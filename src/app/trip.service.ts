import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { TripItem } from 'src/types/tripItem';


@Injectable({
  providedIn: 'root'
})
export class TripService {

  private apiUrl = environment.apiUrl;
  imageUrl = this.apiUrl;

  constructor(private http: HttpClient) { }

  listTrips(): Observable<TripItem[]> {
    return this.http.get<TripItem[]>(this.apiUrl + '/api/trip');
  }
}
