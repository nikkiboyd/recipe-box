import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    masterRecipeList: Recipe[] = [
      new Recipe(
        'Doughnut',
        ['Dough', 'Nuts', 'More Nuts'],
        ['Make Dough', 'Fry that shit', 'Eat it'],
        4),

      new Recipe(
        'Pizza',
        ['Dough', 'Sauce', 'Cheese'],
        ['Make Dough', 'Put Stuff On It', 'Eat it'],
        3),
      new Recipe(
        'Salad',
        ['Lettuce', 'Stuff', 'Dressing'],
        ['Toss that shit', 'Eat it'],
        2),
    ];

  selectedRecipe = null;

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
  this.selectedRecipe = null;
  }

  addRecipe(newRecipe: Recipe) {
    this.masterRecipeList.push(newRecipe);
  }
}
