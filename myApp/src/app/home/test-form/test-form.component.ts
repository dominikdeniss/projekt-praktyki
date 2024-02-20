import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
  FormsModule,
} from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-test-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DropdownModule,
    CommonModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    InputNumberModule,
  ],
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.scss',
})
export class TestFormComponent implements OnInit {
  myForm: FormGroup | any | undefined;
  cities: City[] | undefined;
  displayedFirstName: string | undefined;
  displayedLastName: string | undefined;
  displayedBirthDate: Date | string | undefined;
  isButtonDisabled: boolean = false;
  displayedValue: number | undefined;
  displayedCities: City[] | undefined;
  firstName: string | undefined;
  date: Date[] | undefined;

  constructor() {
    this.myForm = new FormGroup({
      firstName: new FormControl<string | null>('', Validators.required),
      lastName: new FormControl<string | null>('', Validators.required),
      birthDate: new FormControl<Date | null>(new Date(), Validators.required),
      accBalance: new FormControl<number | null>(0, [Validators.required]),
      City: new FormControl<string | null>('', Validators.required),
      Value: new FormControl<number | undefined>(0, Validators.required),
    });
  }

  onSubmit() {
    this.displayedFirstName = this.myForm.get('firstName').value;
    this.displayedLastName = this.myForm.get('lastName').value;
    this.displayedBirthDate = this.myForm.get('birthDate').value;
    this.displayedValue = this.myForm.get('Value').value;
    this.displayedCities = this.myForm.get('City').value.name;
    const selectedCity = this.myForm.get('City').value;
    this.displayedCities = selectedCity ? selectedCity.name : '';
    this.isButtonDisabled = false;
  }

  ngOnInit(): void {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
      { name: 'Warsaw', code: 'WA' },
      { name: 'Tokyo', code: 'TY' },
      { name: 'Munich', code: 'MU' },
      { name: 'Chicago', code: 'CH' },
      { name: 'Hamburg', code: 'HM' },
    ];
  }
}
