import { Component, OnInit } from '@angular/core';
import { GatosService } from './gatos.service';
import { ImagenesModel } from '../imagenes/imagenes.model';
import { timeInterval } from 'rxjs/operators';

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
  styleUrls: ['./gatos.component.css']
})
export class GatosComponent implements OnInit {

  ngOnInit(): void {
   
  }

}
