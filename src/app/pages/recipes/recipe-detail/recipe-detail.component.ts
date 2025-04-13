import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../../core/services/recipe.service';
import { NgIf, NgFor } from '@angular/common'; // Import NgIf and NgFor
import { Recipe } from '../../../core/models/recipe.model'; // Import Recipe model


@Component({
  selector: 'app-recipe-detail',
  imports: [NgIf, NgFor],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {
  recipe?: Recipe;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.recipe = this.recipeService.getRecipeById(id);
        console.log('Kapott ID:', id); // Ellenőrzés
        console.log('Lekért recept:', this.recipe); // Ellenőrzés
      }
    });
  }
}
