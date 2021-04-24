import { Component, OnInit } from '@angular/core';
import { Cocktail} from '../common/cocktail.model'
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  public titre = 'Liste des cocktails'
  public cocktails: Cocktail[] 
  private service:CocktailService;

  constructor( cocktailService:CocktailService ){
      this.service  = cocktailService;
  }

  ngOnInit(): void {
    this.service.getCocktails().subscribe(
      (params_data: Cocktail[] ) => {
          this.cocktails  =  params_data;
  });

  }
}

