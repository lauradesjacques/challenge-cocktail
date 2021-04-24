import { Component } from '@angular/core';
import { CocktailService} from './cocktail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'servicesQuestCocktail';
  constructor(public cocktailService: CocktailService) { }
}
