import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AccordionModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  name: string = 'Jarek';
  age: number = 30;
  isMale: boolean = true;
  actualDate: Date | undefined;
  dateVisible: boolean = true;
  guideList:
    | string[]
    | [
        'Przygotować miejsce do organizacji pracy',
        'Setup WSL',
        'Utworzyć repozytorium',
        'Poznajcie NPM',
        'Utowrzyć projekt Angular',
        'Poznajcie Angular',
        'Angular Routing',
        'Zainstalujcie primeNG do waszego projektu Angular',
        'SCSS/Sass',
        'Poznajcie flexbox i grid',
        'Stwórzmy nawigację',
        'TypeScript i Angular'
      ];

  ngOnInit(): void {
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

  constructor() {
    this.actualDate = new Date();
    this.guideList = [];
  }

  showDateTime() {
    this.actualDate = new Date();
  }
  toggleDateVisibility() {
    this.dateVisible = !this.dateVisible;
  }
}
