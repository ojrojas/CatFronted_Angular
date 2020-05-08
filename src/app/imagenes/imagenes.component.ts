import { Component, OnInit } from '@angular/core';
import { ImagenesService } from './imagenes.service';
import { ImagenesModel } from './imagenes.model';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  gatos: ImagenesModel[] = new Array<ImagenesModel>();
  selectedPaciente: ImagenesModel;

  constructor(private imagenService: ImagenesService) { }

  ngOnInit(): void {
    for (let index = 0; index < 10; index++) {
      this.obtenerGatos();
    }
  }

  onSelected(imagenSelected: ImagenesModel) {
    this.selectedPaciente = imagenSelected;
    console.log("Seleccionado: ", this.selectedPaciente.id);
  }

  async obtenerGatos() {
    await this.imagenService.getGatos().subscribe((val: ImagenesModel[]) => {
      console.log("antes de setear", val[0]);
      this.gatos.push(val[0]);
    }, error => { console.log(`No se obtuvo respuesta`) },
      () => {
        console.log("consulta finalizada");
      });
  }
}
