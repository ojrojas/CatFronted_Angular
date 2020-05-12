import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'gatos', 
    loadChildren :() => import('./gatos/gatos.module').then(m => m.GatosModule)
  },
  {
    path:'imagenes', 
    loadChildren: () => import('./imagenes/imagenes.module').then(m => m.ImagenesModule) 
  }, 
  {
    path:'',
    loadChildren : () => import('./home/home.module').then(m => m.HomeModule),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
