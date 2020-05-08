import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { GatosService } from './gatos.service';
import { ImagenesService } from '../imagenes/imagenes.service';
import { ImagenesModel } from '../imagenes/imagenes.model';

@Component({
  selector: 'app-creategato',
  templateUrl: './creategato.component.html',
  styleUrls: ['./creategato.component.css']
})
export class CreateGatoComponent implements OnInit {

  gatos: ImagenesModel = new ImagenesModel();
  parametro: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gatoService: GatosService,
    private imagenesService: ImagenesService) { }

  ngOnInit(): void {
    this.parametro = this.route.snapshot.params.id;
    this.obtenerGatoById(this.parametro);
    console.log("El parametro es", this.parametro);
  }

  async obtenerGatoById(parametro: string) {
   await this.imagenesService.getGato(parametro).subscribe((val: ImagenesModel) => {
      console.log("antes de setear", val);
      this.gatos = (val);
    }, error => { console.log(`No se obtuvo respuesta`) },
      () => {
        console.log("consulta finalizada");
      });;
  }
}
