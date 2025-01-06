import { Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen.component';

export const HOME_SCREEN_ROUTES: Routes = [
  {
    path: '',
    component: HomeScreenComponent
  },
  {
    path: 'continue-watching',
    pathMatch: 'full',
    loadComponent: () =>
      import('./continue-watching/continue-watching.component').then(
        (m) => m.ContinueWatchingComponent
      ),
  },
  {
    path: 'latest-releases',
    pathMatch: 'full',
    loadComponent: () =>
      import('./latest-releases/latest-releases.component').then(
        (m) => m.LatestReleasesComponent
      ),
  },
  {
    path: 'top-rated',
    pathMatch: 'full',
    loadComponent: () =>
      import('./top-rated/top-rated.component').then(
        (m) => m.TopRatedComponent
      ),
  },
  {
    path: 'upcoming-releases',
    pathMatch: 'full',
    loadComponent: () =>
      import('./upcoming-releases/upcoming-releases.component').then(
        (m) => m.UpcomingReleasesComponent
      ),
  },
];
