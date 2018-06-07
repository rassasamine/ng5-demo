import { Car } from './../models/car';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {

  private baseUrl = 'http://localhost:3050/cars';

  constructor(private httpClient: HttpClient) { }

  all = () => this.httpClient.get<Car[]>(this.baseUrl).toPromise();

  insert = (car: Car) => this.httpClient.post<number>(this.baseUrl, car).toPromise();

  delete = (carId: number) => this.httpClient.delete<Car>(this.baseUrl + '/' + encodeURIComponent(carId.toString())).toPromise();
}
