import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { MenuCardRoutingModule } from './menu-card-routing.module';
import { RootComponent } from './components/root/root.component';
import { MenuCardService } from './services/menu-card.service';
import { MenuCardListComponent } from './components/menu-card-list/menu-card-list.component';
import { McRAIButtonModule } from 'ui';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MenuCardRoutingModule,
    McRAIButtonModule
  ],
  declarations: [
    RootComponent,
    MenuCardListComponent
  ],
  providers: [
    MenuCardService
  ]
})
export class MenuCardModule { }
