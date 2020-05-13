import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map } from 'rxjs/operators'
import { ImagenesModel } from '../imagenes/imagenes.model';
import { Observable } from 'rxjs';
import { GatosModel } from './gatos.model';
import { InyectablesRutas } from '../inyectables/inyectable-rutas.service';
import { ImagenesService } from '../imagenes/imagenes.service';

const headers = new HttpHeaders();
headers.set('x-api-key', 'f221c99b-304d-4404-b111-cbd3ddccf31a');

@Injectable({
  providedIn: 'root'
})
export class GatosService {

  constructor(
    private http: HttpClient,
    private baseUrls: InyectablesRutas,
    private imagenesServices: ImagenesService
  ) { }

  getGatos(): Observable<GatosModel[]> {
    const urlQuery = this.baseUrls.BaseBackend + '/gatos';
    console.log("urlQuery getGatos", urlQuery);
    return this.http.get<Array<GatosModel>>(
      urlQuery, { headers: headers })
      .pipe(
        map((response: Array<GatosModel>) => {
          console.log("respuesta", response);
          return <Array<GatosModel>>response.map(item => {
            return new GatosModel({
              foto: item.foto,
              nombre: item.nombre,
              id: item.id,
              raza: item.raza,
              edad: item.edad
            });
          });
        }));
  }

  getGato(id: string): Observable<GatosModel> {
    const urlQuery = this.baseUrls.BaseBackend + '/gatos';
    console.log("urlQuery getGatos", urlQuery);
    return this.http.get<GatosModel>(
      urlQuery, { headers: headers })
      .pipe(
        map((response: GatosModel) => {
          return response
        }));
  }

  createGato(gatoDto: GatosModel): Observable<GatosModel> {
    const urlQuery =  this.baseUrls.BaseBackend + `/gatos`;
    console.log('urlQuery Crear gato favorito', urlQuery);
    return this.http.post(urlQuery, gatoDto).pipe(
      map((response:GatosModel) => { 
        return response;
      })
    )
  }

  deleteGato(gatoDto:GatosModel){
    const urlQuery =  this.baseUrls.BaseBackend + `/gatos/${gatoDto.id}`;
    console.log('urlQuery Crear gato favorito', urlQuery);
    return this.http.delete(urlQuery).pipe(
      map(response => { 
        console.log(response);
        return response;
      })
    )
  }

  updateGato(gatoDto: GatosModel): Observable<GatosModel> {
    const urlQuery =  this.baseUrls.BaseBackend + `/gatos/${gatoDto.id}`;
    console.log('urlQuery Crear gato favorito', urlQuery);
    return this.http.put(urlQuery, gatoDto).pipe(
      map((response:GatosModel) => { 
        return response;
      })
    )
  }

}
