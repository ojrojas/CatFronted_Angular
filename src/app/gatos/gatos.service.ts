import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map } from 'rxjs/operators'
import { ImagenesModel } from '../imagenes/imagenes.model';
import { Observable } from 'rxjs';

const headers = new HttpHeaders();
headers.set('x-api-key', 'f221c99b-304d-4404-b111-cbd3ddccf31a');
const BaseUrl = "https://api.thecatapi.com/v1"

@Injectable({
  providedIn: 'root'
})
export class GatosService {

}
