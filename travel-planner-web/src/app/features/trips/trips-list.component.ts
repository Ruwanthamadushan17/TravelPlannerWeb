import { Component, inject } from '@angular/core';
import { NgIf, NgFor, DatePipe, CurrencyPipe, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TripService } from '../../core/services/trip.service';
import { catchError, of } from 'rxjs';

@Component({
  standalone: true,
  selector: 'tp-trips-list',
  imports: [NgIf, NgFor, AsyncPipe, DatePipe, CurrencyPipe, RouterLink],
  template: `
    <h2>Trips</h2>
    <p><a routerLink="/trips/new">Create a trip</a></p>

    <ng-container *ngIf="trips$ | async as trips; else loading">
      <p *ngIf="error" class="error">{{ error }}</p>
      <p *ngIf="!error && trips.length === 0">No trips yet.</p>
      <ul *ngIf="!error && trips.length">
        <li *ngFor="let t of trips">
          <a [routerLink]="['/trips', t.id]">
            {{ t.destinations?.[0]?.city || 'Trip' }} •
            {{ t.startDate | date:'mediumDate' }} – {{ t.endDate | date:'mediumDate' }} •
            {{ t.budget | currency:'GBP':'symbol-narrow' }}
          </a>
        </li>
      </ul>
    </ng-container>

    <ng-template #loading>Loading trips…</ng-template>
  `
})
export class TripsListComponent {
    private svc = inject(TripService);

    error = '';
    trips$ = this.svc.list().pipe(
    catchError(() => { this.error = 'Failed to load trips.'; return of([]); })
  );
}
