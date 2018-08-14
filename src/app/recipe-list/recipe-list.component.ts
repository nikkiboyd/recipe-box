import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

  export class RecipeListComponent {
    @Input() childRecipeList: Recipe[];
    @Output() clickSender = new EventEmitter();

  editButtonClicked(recipeToEdit: Recipe) {
   this.clickSender.emit(recipeToEdit);
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

  filterByCompleteness: string = "incompleteRecipes";

  onChange(optionFromMenu) {
  this.filterByCompleteness= optionFromMenu;
}

toggleDone(clickedRecipe: Recipe, setCompleteness: boolean) {
   clickedRecipe.cooked = setCompleteness;
 }

}
