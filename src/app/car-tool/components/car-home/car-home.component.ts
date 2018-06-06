import { CarsService } from './../../services/cars.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './../../models/car';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {
  public cars: Car[] = [];

  constructor(private carSrv: CarsService) { }

  ngOnInit() {
    this.carSrv.all().then(cars => {
      this.cars = cars;
    });
  }

}
