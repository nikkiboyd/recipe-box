import { Component } from '@angular/core';
import { Recipe } from  './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';
  recipes: Recipe[] = [
    new Recipe(
      'Doughnut',
      ['Dough', 'Nuts', 'More Nuts'],
      ['Make Dough', 'Fry that shit', 'Eat it']),
    new Recipe(
      'Pizza',
      ['Dough', 'Sauce', 'Cheese'],
      ['Make Dough', 'Put Stuff On It', 'Eat it']),
    new Recipe(
      'Salad',
      ['Lettuce', 'Stuff', 'Dressing'],
      ['Toss that shit', 'Eat it']),

  ];
}
