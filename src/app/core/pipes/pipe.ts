import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../../core/models/recipe.model';

@Pipe({
  name: 'recipeFilter'
})
export class RecipeFilterPipe implements PipeTransform {
  transform(recipes: Recipe[], searchTerm: string): Recipe[] {
    if (!recipes || !searchTerm) {
      return recipes;
    }
    const lowerSearch = searchTerm.toLowerCase();
    return recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(lowerSearch) ||
      recipe.description.toLowerCase().includes(lowerSearch)
    );
  }
}