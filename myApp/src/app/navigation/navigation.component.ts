import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ListComponent } from '../home/list/list.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MenubarModule, ListComponent, HttpClientModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Siema tworzymy aplikacje',
        icon: 'pi pi-home',
        routerLink: '/',
        items: [],
      },
      {
        label: 'Guide',
        icon: 'pi pi-fw pi-user',
        routerLink: 'guide',
        items: [],
      },
      {
        label: 'Layout',
        icon: 'pi pi-fw pi-bars',
        items: [
          {
            label: 'Grid',
            icon: 'pi pi-fw pi-stop',
            routerLink: 'layout/grid',
            items: [],
          },
          {
            label: 'Flexbox',
            icon: 'pi pi-fw pi-sort-alt',
            routerLink: 'layout/flexbox',
            items: [],
          },
        ],
      },
      {
        label: 'Invoices',
        icon: 'pi pi-fw pi-paperclip',
        items: [
          {
            label: 'List',
            icon: 'pi pi-fw pi-list',
            routerLink: '/list',
          },
        ],
      },
      {
        label: 'test-form',
        icon: 'pi pi-fw pi-pencil',
        routerLink: 'test-form',
        items: [],
      },
    ];
  }
}
