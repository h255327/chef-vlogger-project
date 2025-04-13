import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RecipeService } from '../../../core/services/recipe.service';
import { Recipe } from '../../../core/models/recipe.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})

export class RecipeListComponent {
  recipes: Recipe[] = [];
  searchTerm: string = '';

  constructor(private recipeService: RecipeService) {
    this.recipes = this.recipeService.getRecipes();
  }

  get filteredRecipes(): Recipe[] {
    if (!this.searchTerm) {
      return this.recipes;
    }
    const lowerSearch = this.searchTerm.toLowerCase();
    return this.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(lowerSearch) ||
      recipe.description.toLowerCase().includes(lowerSearch)
    );
  }
}
