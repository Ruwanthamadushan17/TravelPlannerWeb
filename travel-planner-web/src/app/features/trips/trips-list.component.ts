import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf, NgFor, DatePipe, CurrencyPipe, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TripService } from '@core/services/trip.service';
import { catchError, of } from 'rxjs';
import { Trip } from '@core/models/trip';

@Component({
  standalone: true,
  selector: 'tp-trips-list',
  imports: [NgIf, NgFor, AsyncPipe, DatePipe, CurrencyPipe, RouterLink],
  templateUrl: './trips-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripsListComponent {
    private svc = inject(TripService);

    error = '';
    trips$ = this.svc.list().pipe(
    catchError(() => { this.error = 'Failed to load trips.'; return of([]); })
  );

  trackById(index: number, t: Trip): string | number {
    return t.id ?? index;
  }
}
