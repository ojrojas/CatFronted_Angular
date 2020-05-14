import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatosRoutingModule } from './gatos-routing.module';
import { GatosComponent } from './gatos.component';
import { CreateGatoComponent } from './creategato.component';
import { FormsModule } from '@angular/forms';
import { EditargatoComponent } from './editargato.component';
import { EliminargatoComponent } from './eliminargato.component';


@NgModule({
  declarations: [
    GatosComponent,
    CreateGatoComponent,
    EditargatoComponent,
    EliminargatoComponent
  ],
  imports: [
    CommonModule,
    GatosRoutingModule,
    FormsModule
  ]
})
export class GatosModule { }
