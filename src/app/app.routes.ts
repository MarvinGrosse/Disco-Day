import { Routes } from '@angular/router';
import { SearchViewComponent } from './pages/search.page/search.page';
import { DetailViewComponent } from './pages/details.page/details.page';
import { NotFoundComponent } from './pages/not-found.page/not-found.page';

export const routes: Routes = [
  { path: '', title: 'Search', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', title: 'Search', component: SearchViewComponent },
  { path: 'details/:id', title: 'Details', component: DetailViewComponent },
  { path: '**', title: 'Not Found', component: NotFoundComponent },
];
