import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApartmentsService } from '../../services/apartments.service';
import { Apartment } from '../../models/apartment';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.scss']
})
export class ApartmentComponent implements OnInit {
  apartment: Apartment = new Apartment();

  constructor(
    private route: ActivatedRoute,
    private apartmentsService: ApartmentsService
  ) {

  }

  ngOnInit(): void {
    this.getApartment();
  }

  getApartment(): void {
    const url = this.route.snapshot.paramMap.get('url');
    this.apartmentsService.getApartment(url)
      .subscribe(apartment => this.apartment = apartment);
  }
}
