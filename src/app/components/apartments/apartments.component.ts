import { Component, OnInit } from '@angular/core';
import { ApartmentsService } from '../../services/apartments.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss']
})
export class ApartmentsComponent implements OnInit {
  apartments = [];
  minSquare = null;
  maxSquare = null;
  minRooms = null;
  maxRooms = null;
  minFloor = null;
  maxFloor = null;

  constructor(private apartmentsService: ApartmentsService) {}

  ngOnInit() {
    this.getApartments();
  }

  getApartments(): void {
    const options: Array<{ field: string, operator: string, value: any }> = [];

    if (this.minSquare !== null && this.minSquare !== undefined) {
      options.push({ field: 'square', operator: '>', value: this.minSquare });
    }

    if (this.maxSquare !== null && this.maxSquare !== undefined) {
      options.push({ field: 'square', operator: '<', value: this.maxSquare });
    }

    if (this.minRooms !== null && this.minRooms !== undefined) {
      options.push({ field: 'roomCount', operator: '>', value: this.minRooms });
    }

    if (this.maxRooms !== null && this.maxRooms !== undefined) {
      options.push({ field: 'roomCount', operator: '<', value: this.maxRooms });
    }

    if (this.minFloor !== null && this.minFloor !== undefined) {
      options.push({ field: 'floor', operator: '>', value: this.minFloor });
    }

    if (this.maxFloor !== null && this.maxFloor !== undefined) {
      options.push({ field: 'floor', operator: '<', value: this.maxFloor });
    }

    this.apartmentsService.getApartments(options)
      .subscribe(apartments => this.apartments = apartments);
  }

  resetFilters(): void {
    this.maxFloor = null;
    this.minFloor = null;
    this.maxSquare = null;
    this.minSquare = null;
    this.maxRooms = null;
    this.minRooms = null;

    this.getApartments();
  }
}
