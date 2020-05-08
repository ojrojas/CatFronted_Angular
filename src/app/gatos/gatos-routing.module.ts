import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GatosComponent } from './gatos.component';
import { CreateGatoComponent } from './creategato.component';

const routes: Routes = [
  
  {
    path:':id', component: CreateGatoComponent
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
