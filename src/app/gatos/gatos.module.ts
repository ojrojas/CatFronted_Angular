import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatosRoutingModule } from './gatos-routing.module';
import { GatosComponent } from './gatos.component';
import { CreateGatoComponent } from './creategato.component';


@NgModule({
  declarations: [
    GatosComponent,
    CreateGatoComponent
  ],
  imports: [
    CommonModule,
    GatosRoutingModule
  ]
})
export class GatosModule { }
