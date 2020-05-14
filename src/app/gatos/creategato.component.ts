import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GatosService } from './gatos.service';
import { ImagenesService } from '../imagenes/imagenes.service';
import { ImagenesModel } from '../imagenes/imagenes.model';
import { GatosModel } from './gatos.model';

@Component({
  selector: 'app-creategato',
  templateUrl: './creategato.component.html',
  styleUrls: ['./creategato.component.css']
})
export class CreateGatoComponent implements OnInit {

  gatos: ImagenesModel[] = new Array<ImagenesModel>();
  gato: GatosModel;
  parametro: string;

  selectedGato: ImagenesModel;
  selected: boolean = false;
  model: GatosModel = new GatosModel();
  NumberPattern = "[0-9]+";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gatoService: GatosService,
    private imagenesService: ImagenesService) { }

  ngOnInit(): void {
    this.obtenerImagenesGatos();
  }

  obtenerGatoById(parametro: string) {
    this.gatoService.getGato(parametro).subscribe((val: GatosModel) => {
      console.log("antes de setear", val);
      this.gato = val;
    }, error => { console.log(`No se obtuvo respuesta`); }, () => {
      console.log("consulta finalizada");
    });;
  }

  obtenerImagenesGatos() {
    this.imagenesService.getImagenesBackend().subscribe((val: ImagenesModel[]) => {
      this.gatos = val;
    });
  }

  onSelected(imagenSelected: ImagenesModel) {
    this.selectedGato = imagenSelected;
    this.model.foto = imagenSelected.url;
  }

  onSubmit(form) {
    console.log(form.value);
    this.gatoService.createGato(form.value).subscribe(response => {
      console.log(response);
      form.reset();
    }, error => console.error(error),
      () => console.log("completado la accion de crear"));

  }

  isNumber(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
        return false;
    return true;
}    

}
