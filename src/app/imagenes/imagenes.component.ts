import { Component, OnInit } from '@angular/core';
import { ImagenesService } from './imagenes.service';
import { ImagenesModel } from './imagenes.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  gatos: ImagenesModel[] = new Array<ImagenesModel>();
  selectedGato: ImagenesModel;
  selected: boolean = false;

  constructor(private imagenService: ImagenesService) { }

  ngOnInit(): void {
    for (let index = 0; index < 10; index++) {
      this.obtenerGatosAsync();
    }
  }

  onSelected(imagenSelected: ImagenesModel) {
    if (!imagenSelected.favorita) {
      imagenSelected.favorita = true;
      this.selectedGato = imagenSelected;
      console.log("Seleccionado: ", this.selectedGato.id);
      this.imagenService.createGatoFavorito(imagenSelected).subscribe(
        (val) => {
          let element = document.getElementById("icono"+this.selectedGato.id);
          let span = document.getElementById("span"+this.selectedGato.id);
          element.style.color="palevioletred";
          span.textContent="seleccionada!"
          span.style.fontSize = "14px";
          console.log("favorito creado", val);
        }
      );
    }else{
      this.selectedGato = imagenSelected;
      console.log("Seleccionado: ", this.selectedGato.id);
      this.imagenService.deleteGatoFavorito(imagenSelected).subscribe(
        (val) => {
          imagenSelected.favorita = false;
          let icon = document.getElementById("icono"+this.selectedGato.id);
          let span = document.getElementById("span"+this.selectedGato.id);
          icon.style.color="gray";
          span.textContent ="";
          console.log("favorito eliminado" ,val);
        }
      );
    }
  }

  async obtenerGatosAsync()  {
    await this.imagenService.getImagenes().subscribe((val: ImagenesModel[]) => {
      console.log("antes de setear", val[0]);
      this.gatos.push(val[0]);
    }, error => { console.log(`No se obtuvo respuesta`) },
      () => {
        console.log("consulta finalizada");
      });
  }
}
