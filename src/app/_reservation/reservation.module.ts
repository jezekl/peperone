import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './components/root/root.component';
import { ReservationRoutingModule } from './reservation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ReservationService } from './services/reservation.service';
import { MessageModule } from '../message/message.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ReservationRoutingModule,
  ],
  declarations: [
    RootComponent
  ],
  providers: [
    ReservationService
  ]
})
export class ReservationModule { }