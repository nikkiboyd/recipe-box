import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.css']
})
export class RecipeNewComponent {
  @Output() sendRecipe = new EventEmitter();

  submitForm(title: string, ingredients: string, directions: string, rating: string) {
    let newRecipe: Recipe = new Recipe(title, ingredients.split(","), directions.split(","), parseInt(rating));
    this.sendRecipe.emit(newRecipe);
  }

}
