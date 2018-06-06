import { CarsService } from './services/cars.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CarHomeComponent } from './components/car-home/car-home.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [CarHomeComponent],
  exports: [CarHomeComponent],
  providers: [CarsService]
})
export class CarToolModule { }
