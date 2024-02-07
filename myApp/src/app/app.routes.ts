import { Routes } from '@angular/router';
import { GuideComponent } from './home/guide/guide.component';
import { FlexboxComponent } from './home/layout/flexbox/flexbox.component';
import { GridComponent } from './home/layout/grid/grid.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'guide', component: GuideComponent },
  { path: 'layout/flexbox', component: FlexboxComponent },
  { path: 'layout/grid', component: GridComponent },
  { path: '', component: HomeComponent },
];
