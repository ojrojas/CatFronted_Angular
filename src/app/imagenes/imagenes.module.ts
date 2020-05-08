import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagenesRoutingModule } from './imagenes-routing.module';
import { ImagenesComponent } from './imagenes.component';


@NgModule({
  declarations: [ImagenesComponent],
  imports: [
    CommonModule,
    ImagenesRoutingModule
  ]
})
export class ImagenesModule { }
