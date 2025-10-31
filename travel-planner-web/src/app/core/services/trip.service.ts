import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '@core/models/trip';

@Injectable({ providedIn: 'root' })
export class TripService {
  constructor(private http: HttpClient) {}
  list(): Observable<Trip[]> { return this.http.get<Trip[]>('/api/trips'); }
  get(id: string): Observable<Trip> { return this.http.get<Trip>(`/api/trips/${id}`); }
}
