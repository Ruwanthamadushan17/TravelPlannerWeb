import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe, DatePipe, CurrencyPipe, NgIf } from '@angular/common';
import { TripService } from '../../core/services/trip.service';

@Component({
  standalone: true,
  selector: 'tp-trip-detail',
  imports: [NgIf, AsyncPipe, DatePipe, CurrencyPipe, RouterLink],
  template: `
    <a routerLink="/trips">← Back</a>
    <section *ngIf="trip$ | async as t; else loading">
      <h2>Trip details</h2>
      <p><strong>Owner:</strong> {{ t.ownerEmail }}</p>
      <p><strong>Dates:</strong> {{ t.startDate | date }} → {{ t.endDate | date }}</p>
      <p><strong>Budget:</strong> {{ t.budget | currency:'GBP':'symbol-narrow' }}</p>
    </section>
    <ng-template #loading>Loading…</ng-template>
  `,
})
export class TripDetailComponent {
  private route = inject(ActivatedRoute);
  private svc = inject(TripService);
  trip$ = this.svc.get(this.route.snapshot.paramMap.get('id')!);
}
