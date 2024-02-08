import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-guide',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './guide.component.html',
  styleUrl: './guide.component.scss',
})
export class GuideComponent {}
