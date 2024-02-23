import { Injectable } from "@angular/core";

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