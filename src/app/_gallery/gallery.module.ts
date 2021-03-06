import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McRAIButtonModule, McRAIIconModule } from 'ui';

import { GalleryRoutingModule } from './gallery-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RootComponent } from './components/root/root.component';
import { GalleryListComponent } from './components/gallery-list/gallery-list.component';
import { GalleryDetailComponent } from './components/gallery-detail/gallery-detail.component';

@NgModule({
  imports: [
    CommonModule,
    GalleryRoutingModule,
    SharedModule,
    McRAIIconModule,
    McRAIButtonModule
  ],
  declarations: [
    RootComponent,
    GalleryListComponent,
    GalleryDetailComponent,
  ]
})
export class GalleryModule { }
