import { Inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class InyectablesRutas {
 
    BaseBackend: string =  "http://localhost:3000";
    BaseCatApi: string =  "https://api.thecatapi.com/v1";

}