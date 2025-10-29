import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'trips', pathMatch: 'full' },
    { 
        path: 'trips', 
        loadComponent: () => import('./features/trips/trips-list.component')
            .then(m => m.TripsListComponent) 
    },
    { 
        path: 'trips/new', 
        loadComponent: () => import('./features/trips/trip-form.component')
            .then(m => m.TripFormComponent) 
    },
    { 
        path: 'trips/:id', 
        loadComponent: () => import('./features/trips/trip-detail.component')
            .then(m => m.TripDetailComponent) 
    },
    {
        path: '**',
        loadComponent: () => import('./features/not-found/not-found.component')
            .then(m => m.NotFoundComponent)
    },
];
