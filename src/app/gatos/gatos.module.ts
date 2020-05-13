import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatosRoutingModule } from './gatos-routing.module';
import { GatosComponent } from './gatos.component';
import { CreateGatoComponent } from './creategato.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GatosComponent,
    CreateGatoComponent
  ],
  imports: [
    CommonModule,
    GatosRoutingModule,
    FormsModule
  ]
})
export class GatosModule { }
