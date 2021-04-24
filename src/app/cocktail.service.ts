import { Injectable } from "@angular/core";
import { Cocktail} from "./common/cocktail.model";
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs';
import { map } from  "rxjs/operators";


@Injectable({
    providedIn:  'root'
})

export class CocktailService {
  private  service:  HttpClient;

  constructor(param_service:  HttpClient) {
      this.service  =  param_service;
  }

  public  getCocktails():  Observable<Cocktail[]> {
    const  obs1:Observable<any> = this.service.get("assets/cocktails.json");
    const  treatment  = ( param_data:Cocktail[]) => {
        return  param_data as Cocktail[];
    };

    return obs1.pipe(map(treatment));
}
}
  

     

   

