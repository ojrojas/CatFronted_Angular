import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ImagenesModel } from './imagenes.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { InyectablesRutas } from '../inyectables/inyectable-rutas.service';

const headers = new HttpHeaders();
headers.set('x-api-key', 'f221c99b-304d-4404-b111-cbd3ddccf31a');
const headers2 = new HttpHeaders();
headers.set('content-type', 'aplicattion/json');

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor(private http: HttpClient, private baseUrls: InyectablesRutas ) { }

  getImagenes(): Observable<ImagenesModel[]> {
    const urlQuery = this.baseUrls.BaseCatApi + '/images/search';
    console.log("urlQuery getImagenes" , urlQuery);
    return this.http.get<Array<ImagenesModel>>(
      urlQuery, { headers: headers })
      .pipe(
        map((response: ImagenesModel[]) => {
          return <Array<ImagenesModel>> response.map(item => {
            return new ImagenesModel({
              favorita: item.favorita,
              id: item.id,
              url: item.url,
            });
          });
        }));
  }

  getImagenesBackend(): Observable<ImagenesModel[]> {
    const urlQuery = this.baseUrls.BaseBackend + '/imagenes';
    console.log("urlQuery getImagenes" , urlQuery);
    return this.http.get<Array<ImagenesModel>>(
      urlQuery, { headers: headers })
      .pipe(
        map((response: ImagenesModel[]) => {
          return <Array<ImagenesModel>> response.map(item => {
            return new ImagenesModel({
              favorita: item.favorita,
              id: item.id,
              url: item.url,
            });
          });
        }));
  }

  getGato(id: string): Observable<ImagenesModel> {
    const urlQuery = this.baseUrls.BaseCatApi + `/images/${id}`;
    console.log("urlimagenbyid", urlQuery);
    return this.http.get<ImagenesModel>(urlQuery, { headers: headers })
      .pipe(
        map((response:ImagenesModel) => {
          return response
        }));
  }


  createGatoFavorito(imagenGato: ImagenesModel){
    const urlQuery =  this.baseUrls.BaseBackend + `/imagenes/favoritos`;
    console.log('urlQuery Crear gato favorito', urlQuery);
    return this.http.post(urlQuery, imagenGato).pipe(
      map((response:ImagenesModel) => { 
        return response;
      })
    )
  }

  deleteGatoFavorito(imagenGato: ImagenesModel){
    const urlQuery =  this.baseUrls.BaseBackend + `/imagenes/favoritos/${imagenGato.id}`;
    console.log('urlQuery Crear gato favorito', urlQuery);
    return this.http.delete(urlQuery).pipe(
      map(response => { 
        console.log(response);
        return response;
      })
    )
  }
}
