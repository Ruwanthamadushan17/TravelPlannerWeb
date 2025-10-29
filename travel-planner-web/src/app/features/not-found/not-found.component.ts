import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'tp-not-found',
  imports: [RouterLink],
  template: `
    <h2>Page not found</h2>
    <p>The page you’re looking for doesn’t exist.</p>
    <p><a routerLink="/trips">Go to Trips</a></p>
  `
})
export class NotFoundComponent {}

