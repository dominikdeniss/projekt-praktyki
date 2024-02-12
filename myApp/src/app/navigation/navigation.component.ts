import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Siema tworzymy aplikacje',
        icon: 'pi pi-fw pi-pencil',
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
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Grid',
            icon: 'pi pi-fw pi-pencil',
            routerLink: 'layout/grid',
            items: [],
          },
          {
            label: 'Flexbox',
            icon: 'pi pi-fw pi-calendar-times',
            routerLink: 'layout/flexbox',
            items: [],
          },
        ],
      },
      {
        label: 'Invoices',
        icon: 'pi pi-fw pi-calendar-times',
        items: [
          {
            label: 'List',
            icon: 'pi pi-fw pi-calendar-times',
          },
        ],
      },
    ];
  }
}
