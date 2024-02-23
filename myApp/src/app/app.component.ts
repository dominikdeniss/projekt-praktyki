import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { InputTextModule } from 'primeng/inputtext';
import { DecimalPipe } from '@angular/common';
import { MessageService, PrimeIcons, MenuItem } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SpeedDialModule } from 'primeng/speeddial';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  cachedName: string | undefined;
  cachedSurname: string | undefined;
  cachedBirthDate: string | undefined;
  cachedCity: string | undefined;
  cachedValue: string | undefined;

  constructor() { }
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    NavigationComponent,
    InputTextModule,
    ToastModule,
    SpeedDialModule,
  ],
  providers: [DecimalPipe, MessageService, PrimeIcons],
})
export class AppComponent implements OnInit {
  title = 'myApp';
  leftTooltipItems: MenuItem[] = [];

  constructor(private messageService: MessageService) {
    this.leftTooltipItems = [];
  }

  ngOnInit(): void {
    this.leftTooltipItems = [
      {
        tooltipOptions: {
          tooltipLabel: 'Strona główna',
          tooltipPosition: 'left',
        },
        icon: 'pi pi-home',
        command: () => {
          this.messageService.add({
            severity: 'info',
            summary: 'Strona główna',
            detail: 'Tutaj możesz dowiedzieć się ogólnych informacji',
          });
        },
      },
      {
        tooltipOptions: {
          tooltipLabel: 'Guide',
          tooltipPosition: 'left',
        },
        icon: 'pi pi-fw pi-user',
        command: () => {
          this.messageService.add({
            severity: 'info',
            summary: 'Guide',
            detail:
              'Tutaj dowiesz się jak dodaliśmy primeNG do naszego projektu',
          });
        },
      },
      {
        tooltipOptions: {
          tooltipLabel: 'Grid',
          tooltipPosition: 'left',
        },
        icon: 'pi pi-fw pi-stop',
        command: () => {
          this.messageService.add({
            severity: 'info',
            summary: 'Grid',
            detail: 'Przykład zastosowania grida',
          });
        },
      },
      {
        tooltipOptions: {
          tooltipLabel: 'Flexbox',
          tooltipPosition: 'left',
        },
        icon: 'pi pi-fw pi-sort-alt',
        command: () => {
          this.messageService.add({
            severity: 'info',
            summary: 'Flex',
            detail: 'Przykład zastosowania flexboxa',
          });
        },
      },
      {
        tooltipOptions: {
          tooltipLabel: 'List',
          tooltipPosition: 'left',
        },
        icon: 'pi pi-fw pi-list',
        command: () => {
          this.messageService.add({
            severity: 'info',
            summary: 'List',
            detail: 'Elementy z listy',
          });
        },
      },
      {
        tooltipOptions: {
          tooltipLabel: 'Form',
          tooltipPosition: 'left',
        },
        icon: 'pi pi-fw pi-pencil',
        command: () => {
          this.messageService.add({
            severity: 'info',
            summary: 'Form',
            detail: 'Testowy formularz',
          });
        },
      },
    ];
  }
}
