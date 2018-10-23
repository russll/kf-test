import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Apartment } from '../models/apartment';
import { APARTMENTS } from '../data/apartments-mock';

@Injectable({
  providedIn: 'root',
})
export class ApartmentsService {
  constructor() {
  }

  getApartments(options: Array<{ field: string, operator: string, value: any }> = []): Observable<Apartment[]> {
    let result = APARTMENTS;

    options.forEach((option) => {
      result = result.filter(item => option.operator === '>' ? item[option.field] >= option.value : item[option.field] <= option.value);
    });

    return of(result);
  }

  getApartment(url): Observable<Apartment> {
    return of(APARTMENTS.find(item => item.url === url));
  }
}
