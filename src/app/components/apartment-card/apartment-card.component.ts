import { Component, Input, OnInit } from '@angular/core';
import { Apartment } from '../../models/apartment';

@Component({
  selector: 'app-apartment-card',
  templateUrl: './apartment-card.component.html',
  styleUrls: ['./apartment-card.component.scss']
})
export class ApartmentCardComponent implements OnInit {
  @Input() apartment: Apartment = new Apartment();

  constructor() { }

  ngOnInit() {
  }

}
