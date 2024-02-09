import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-guide',
  standalone: true,
  imports: [CommonModule, AccordionModule],
  templateUrl: './guide.component.html',
  styleUrl: './guide.component.scss',
})
export class GuideComponent {
  constructor() {}
}
