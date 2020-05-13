import { Component, OnInit } from '@angular/core';
import { GatosService } from './gatos.service';
import { timeInterval } from 'rxjs/operators';
import { GatosModel } from './gatos.model';
import { ImagenesService } from '../imagenes/imagenes.service';

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
  styleUrls: ['./gatos.component.css']
})
export class GatosComponent implements OnInit {

  constructor(
    private imagenesService: ImagenesService,
    private gatoService: GatosService) { }

  gatos: GatosModel[];
  selectedGato: GatosModel;
  selected: boolean = false;

  ngOnInit(): void {
    this.obtenerGatosAsync();
  }


  onSelected(imagenSelected: GatosModel){}

  async obtenerGatosAsync() {
    await this.gatoService.getGatos().subscribe((val: GatosModel[]) => {
      console.log("antes de setear", val);
      this.gatos= val;
    }, error => { console.log(`No se obtuvo respuesta`) },
      () => {
        console.log("consulta finalizada");
      });
  }
}

