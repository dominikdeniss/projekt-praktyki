import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GuideComponent } from './home/guide/guide.component';
import { FlexboxComponent } from './home/layout/flexbox/flexbox.component';
import { GridComponent } from './home/layout/grid/grid.component';
import { LayoutComponent } from './home/layout/layout.component';
import { NavigationComponent } from './navigation/navigation.component';

export const routes: Routes = [
  { path: 'guide', component: GuideComponent },
  { path: '', component: HomeComponent },
  { path: 'layout/flexbox', component: FlexboxComponent },
  { path: 'layout/grid', component: GridComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'navigation', component: NavigationComponent },
];
