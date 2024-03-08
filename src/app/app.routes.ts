import { Routes } from '@angular/router';
import { MetalsComponent } from './metals/metals.component';
import { WoodsComponent } from './woods/woods.component';
import { HidesComponent } from './hides/hides.component';
import { FibresComponent } from './fibres/fibres.component';
import { GemsComponent } from './gems/gems.component';

export const routes: Routes = [
  { path: 'metals', component: MetalsComponent },
  { path: 'woods', component: WoodsComponent },
  { path: 'hides', component: HidesComponent },
  { path: 'fibres', component: FibresComponent },
  { path: 'gems', component: GemsComponent },
  { path: '', redirectTo: '/metals', pathMatch: 'full' },
];
