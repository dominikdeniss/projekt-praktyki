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
    actualDate: Date|undefined;
    dateVisible: boolean = true;
    guideList: string[]|["Zadanie1", "Zadanie2", "Zadanie3"];

    ngOnInit(): void{
      this.guideList.push("Zadanie1");
      this.guideList.push("Zadanie2");
      this.guideList.push("Zadanie3");

    }

    constructor(){
      this.actualDate = new Date();
      this.guideList = [];
    }

    showDateTime(){
      this.actualDate = new Date();
    }
    toggleDateVisibility(){
      this.dateVisible = !this.dateVisible;
    }
}
