import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ImagenesModel } from './imagenes.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const headers = new HttpHeaders();
headers.set('x-api-key', 'f221c99b-304d-4404-b111-cbd3ddccf31a');
const BaseUrl = "https://api.thecatapi.com/v1";

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor(private http: HttpClient) { }

  getGatos(): Observable<ImagenesModel[]> {
    return this.http.get<Array<ImagenesModel>>(BaseUrl + '/images/search', { headers: headers })
      .pipe(
        map(response => {
          return <Array<ImagenesModel>>response.map(item => {
            return new ImagenesModel({
              breeds: item.breeds,
              height: item.height,
              id: item.id,
              url: item.url,
              width: item.width
            });
          });
        }));
  }

  getGato(id: string): Observable<ImagenesModel> {
    const urlQuery = BaseUrl + `/images/${id}`;
    console.log("urlimagenbyid", urlQuery);
    return this.http.get<ImagenesModel>(urlQuery, { headers: headers })
      .pipe(
        map(response => {
          return response;
        }));
  }

}
