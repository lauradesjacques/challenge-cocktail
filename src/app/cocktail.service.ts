import { Injectable } from "@angular/core";
import { Cocktail} from "./cocktail.model";

@Injectable({
    providedIn:  'root'
})

export class CocktailService {
  public cocktails : Cocktail[] = new Array <Cocktail>();
   constructor() {
     this.cocktails.push(
       new Cocktail ('Mai Tai', 5.5, 'https://cdn.pixabay.com/photo/2015/03/18/21/20/mai-tai-680020_1280.jpg'),
       new Cocktail ('Mojito', 4.8, 'https://cdn.pixabay.com/photo/2017/01/09/11/34/summer-drink-1966290_1280.jpg'),
       new Cocktail ('Pina Colada', 6.2, 'https://cdn.pixabay.com/photo/2016/05/20/22/10/pineapple-1406121_1280.jpg'),
     );}

     

    public getCocktails(): Cocktail [] {
        return this.cocktails;
    }
}
