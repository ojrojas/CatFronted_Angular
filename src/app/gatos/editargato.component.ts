import { Component, OnInit } from '@angular/core';
import { ImagenesModel } from '../imagenes/imagenes.model';
import { GatosModel } from './gatos.model';
import { ActivatedRoute, Router } from '@angular/router';
import { GatosService } from './gatos.service';
import { ImagenesService } from '../imagenes/imagenes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editargato',
  templateUrl: './editargato.component.html',
  styleUrls: ['./editargato.component.css']
})
export class EditargatoComponent implements OnInit {


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
    let id = this.route.snapshot.paramMap.get('id');
    console.log("el id enviado es", id);
    this.obtenerGatoById(id);

  }

  setearGato(gato: GatosModel) {
    this.model._id = gato._id;
    this.model.nombre = gato.nombre;
    this.model.edad = gato.edad;
    this.model.raza = gato.raza;
    this.model.foto = gato.foto;
  }

  obtenerGatoById(parametro: string) {
    this.gatoService.getGato(parametro).subscribe((val: any) => {
      console.log("gato obtenido id", val.gato);
      this.setearGato(val.gato);
    }, error => { console.log(`No se obtuvo respuesta`); }, () => {
      console.log("consulta finalizada");
    });
    
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
    this.gatoService.updateGato(form.value).subscribe(response => {
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


