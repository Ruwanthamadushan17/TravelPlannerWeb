import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe, DatePipe, CurrencyPipe, NgIf } from '@angular/common';
import { TripService } from '../../core/services/trip.service';

@Component({
  standalone: true,
  selector: 'tp-trip-detail',
  imports: [NgIf, AsyncPipe, DatePipe, CurrencyPipe, RouterLink],
  templateUrl: './trip-detail.component.html',
})
export class TripDetailComponent {
  private route = inject(ActivatedRoute);
  private svc = inject(TripService);
  trip$ = this.svc.get(this.route.snapshot.paramMap.get('id')!);
}
