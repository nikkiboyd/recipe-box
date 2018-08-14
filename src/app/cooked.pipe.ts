import {Pipe, PipeTransform} from '@angular/core';
import {Recipe} from './models/recipe.model';

@Pipe({
  name: "cooked",
  pure: false
})

export class CookedPipe implements PipeTransform {

  transform(input: Recipe[], desiredCompleteness) {
    let output: Recipe[] = [];
    if(desiredCompleteness === "incompleteRecipes") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].cooked === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "completedRecipes") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].cooked === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
