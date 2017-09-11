import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './components/root/root.component';
import { ReservationRoutingModule } from './reservation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { McRAIButtonModule, McRAIInputModule } from '@mcrai/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { ReservationService } from './services/reservation.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ReservationRoutingModule,
    McRAIButtonModule,
    McRAIInputModule
  ],
  declarations: [RootComponent],
  providers: [
    ReservationService
  ]
})
export class ReservationModule { }
