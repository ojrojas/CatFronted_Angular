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
  selected: boolean = false;

  constructor(private imagenService: ImagenesService) { }

  ngOnInit(): void {
    for (let index = 0; index < 10; index++) {
      this.obtenerGatos();
    }
  }

  onSelected(imagenSelected: ImagenesModel) {
    if (!imagenSelected.favorita) {
      imagenSelected.favorita = true;
      this.selectedPaciente = imagenSelected;
      console.log("Seleccionado: ", this.selectedPaciente.id);
      this.imagenService.createGatoFavorito(imagenSelected).subscribe(
        (val) => {
          console.log(val);
        }
      );
    }else{
      this.selectedPaciente = imagenSelected;
      console.log("Seleccionado: ", this.selectedPaciente.id);
      this.imagenService.deleteGatoFavorito(imagenSelected).subscribe(
        (val) => {
          console.log(val);
        }
      );
    }
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
