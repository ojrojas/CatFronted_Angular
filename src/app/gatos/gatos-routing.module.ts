import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GatosComponent } from './gatos.component';
import { CreateGatoComponent } from './creategato.component';
import { EditargatoComponent } from './editargato.component';
import { EliminargatoComponent } from './eliminargato.component';

const routes: Routes = [
  {
    path:'editar/:id', component:EditargatoComponent
  },
  {
    path:'crear', component: CreateGatoComponent
  },
  {
    path:'', component: GatosComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatosRoutingModule { }
