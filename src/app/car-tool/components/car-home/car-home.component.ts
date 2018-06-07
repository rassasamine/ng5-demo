import { FormGroup, FormBuilder } from '@angular/forms';
import { CarsService } from './../../services/cars.service';
import { Component, OnInit } from '@angular/core';
import { Car } from './../../models/car';
@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {
  public cars: Car[] = [];
  public carForm: FormGroup;

  constructor(private carSrv: CarsService, private fb: FormBuilder) {
    this.carForm = this.fb.group({
      makeInput: '',
      modelInput: '',
      yearInput: '',
      colorInput: '',
      priceInput: ''
    });
  }

  refrechCars() {
    return this.carSrv.all().then(cars => {
    this.cars = cars;
    });
  }

  ngOnInit() {
    this.refrechCars();
  }

  addCar() {
    const carFromValue = this.carForm.value;

    const car: Car = {
      make: carFromValue.makeInput,
      model: carFromValue.modelInput,
      year: carFromValue.yearInput,
      color: carFromValue.colorInput,
      price: carFromValue.priceInput
    };

    this.carSrv.insert(car).then(() => this.refrechCars());
  }

  deleteCar(carId: number) {
    this.carSrv.delete(carId).then(() => this.refrechCars());
  }
}
