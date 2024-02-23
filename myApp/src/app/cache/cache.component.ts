import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-cache',
  standalone: true,
  imports: [],
  templateUrl: './cache.component.html',
  styleUrl: './cache.component.scss'
})
export class CacheComponent {

}

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
