import { Component, OnInit } from '@angular/core';
import { ApartmentsService } from '../../services/apartments.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  apartments = [];

  constructor(private apartmentsService: ApartmentsService) { }

  ngOnInit() {
    this.getApartments();
  }

  getApartments(): void {
    this.apartmentsService.getApartments()
      .subscribe(apartments => this.apartments = apartments);
  }
}
