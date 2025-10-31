import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TripService } from '@core/services/trip.service';

@Component({
  standalone: true,
  selector: 'tp-trip-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripFormComponent {
  private fb = inject(FormBuilder);
  private trips = inject(TripService);
  private router = inject(Router);

  form = this.fb.nonNullable.group({
    ownerEmail: ['', [Validators.required, Validators.email]],
    startDate: ['', Validators.required],
    endDate:   ['', Validators.required],
    budget:    0,
    city:      ['', Validators.required],
    country:   ['', Validators.required],
  });

  submit() { }
}
