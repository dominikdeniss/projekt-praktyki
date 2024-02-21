import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';
import { MenuItem, MessageService } from 'primeng/api';
import { PrimeIcons } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AccordionModule,
    CommonModule,
    AccordionModule,
    ButtonModule,
    TimelineModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [PrimeIcons],
})
export class HomeComponent implements OnInit {
  name: string = 'Jarek';
  surname: string = 'Kowalski';
  age: number = 30;
  isMale: boolean = true;
  actualDate: Date | undefined;
  dateVisible: boolean = true;
  guideList: string[] | undefined = [];
  loading: boolean = false;

  constructor(private messageService: MessageService) {
    this.actualDate = new Date();
    this.guideList = [];
  }

  ngOnInit(): void {
    this.guideList = [];
    this.guideList.push('Przygotować miejsce do organizacji pracy');
    this.guideList.push('Setup WSL');
    this.guideList.push('Utworzyć repozytorium');
    this.guideList.push('Poznajcie NPM');
    this.guideList.push('Utowrzyć projekt Angular');
    this.guideList.push('Poznajcie Angular');
    this.guideList.push('Angular Routing');
    this.guideList.push('Zainstalujcie primeNG do waszego projektu Angular');
    this.guideList.push('SCSS/Sass');
    this.guideList.push('Poznajcie flexbox i grid');
    this.guideList.push('Stwórzmy nawigację');
    this.guideList.push('TypeScript i Angular');
  }

  showDateTime() {
    this.actualDate = new Date();
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  toggleDateVisibility() {
    this.dateVisible = !this.dateVisible;
  }
}
