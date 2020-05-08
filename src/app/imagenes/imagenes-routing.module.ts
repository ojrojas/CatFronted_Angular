import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagenesComponent } from './imagenes.component';


const routes: Routes = [
  {
    path:'', 
    component:ImagenesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagenesRoutingModule { }
