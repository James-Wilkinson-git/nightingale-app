import { Routes } from '@angular/router';
import { MetalsComponent } from './metals/metals.component';

export const routes: Routes = [
  { path: 'metals', component: MetalsComponent },
  { path: '', redirectTo: '/metals', pathMatch: 'full' },
];
