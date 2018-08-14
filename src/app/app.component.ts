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

  editIngredients(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }

  ratingColor(currentRecipe) {
    if (currentRecipe.rating === 5) {
      return "bg-success";
    } else if (currentRecipe.rating === 4) {
      return "bg-info";
    } else if (currentRecipe.rating === 3) {
      return "bg-primary";
    } else if (currentRecipe.rating === 2) {
      return "bg-warning";
    } else if (currentRecipe.rating === 1) {
      return "bg-danger";
    }
  }
}
