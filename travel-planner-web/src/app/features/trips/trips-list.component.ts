import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'tp-trips-list',
  imports: [NgIf, NgFor, AsyncPipe],
  template: `
    <h2>Trips</h2>
    <p>It works!</p>
  `,
})
export class TripsListComponent implements OnInit {
  ngOnInit() {}
}
