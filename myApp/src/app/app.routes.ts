import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GuideComponent } from './home/guide/guide.component';
import { FlexboxComponent } from './home/layout/flexbox/flexbox.component';
import { GridComponent } from './home/layout/grid/grid.component';
import { LayoutComponent } from './home/layout/layout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ListComponent } from './home/list/list.component';
import { InvoiceComponent } from './home/list/invoice/invoice.component';

export const routes: Routes = [
  { path: 'guide', component: GuideComponent },
  { path: '', component: HomeComponent },
  { path: 'layout/flexbox', component: FlexboxComponent },
  { path: 'layout/grid', component: GridComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'list', component: ListComponent },
  { path: 'list/:id', component: InvoiceComponent },
];
