import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';
import { MenuItem, MessageService } from 'primeng/api';
import { PrimeIcons } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TimelineModule } from 'primeng/timeline';

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}

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
  completedTasks: string[] = [];
  events: EventItem[];

  constructor(private messageService: MessageService) {
    this.actualDate = new Date();
    this.guideList = [];
    this.events = [
      {
        status: 'Przygotować miejsce do organizacji pracy',
        date: '05/02/2024',
      },
      {
        status: 'Setup WSL',
        date: '06/02/2024',
      },
      {
        status: 'Utworzyć repozytorium',
        date: '06/02/2024',
      },
      {
        status: 'Poznajcie NPM',
        date: '06/02/2024',
      },
      {
        status: 'Utowrzyć projekt Angular',
        date: '07/02/2024',
      },
      {
        status: 'Poznajcie Angular',
        date: '07/02/2024',
      },
      {
        status: 'Angular Routing',
        date: '08/02/2024',
      },
      {
        status: 'Zainstalujcie primeNG do waszego projektu Angular',
        date: '09/02/2024',
      },
      {
        status: 'SCSS/Sass',
        date: '13/02/2024',
      },
      {
        status: 'Poznajcie flexbox i grid',
        date: '13/02/2024',
      },
      {
        status: 'Stwórzmy nawigację',
        date: '13/02/2024',
      },
      {
        status: 'TypeScript i Angular',
        date: '14/02/2024',
      },
      {
        status: 'Formularz i Inputy',
        date: '19/02/2024',
      },
    ];
  }
  ngOnInit(): void {}

  isTaskCompleted(task: string): boolean {
    return this.completedTasks.includes(task);
  }

  toggleTaskCompletion(task: string): void {
    if (this.isTaskCompleted(task)) {
      this.completedTasks = this.completedTasks.filter((t) => t !== task);
    } else {
      this.completedTasks.push(task);
    }
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
