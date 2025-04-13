import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'Pörkölt',
      imageUrl: 'assets/images/porkolt.jpg',
      description: 'Magyaros pörkölt recept, szalonnával és hagymával.',
      ingredients: [
        { name: 'Sertéshús', quantity: '500g' },
        { name: 'Vöröshagyma', quantity: '1 fej' },
        { name: 'Olaj', quantity: '2 evőkanál' },
        { name: 'Pirospaprika', quantity: '1 evőkanál' },
        { name: 'Só', quantity: 'ízlés szerint' },
        { name: 'Bors', quantity: 'ízlés szerint' }
      ],
      instructions: 'A hagymát megdinszteljük, hozzáadjuk a paprikát, majd a húst. Sózzuk, borsozzuk, és puhára főzzük.'
    },
    {
      id: '2',
      title: 'Gulyás',
      imageUrl: 'assets/images/gulyas.jpg',
      description: 'Finom gulyás, igazi magyar étel, sok zöldséggel.',
      ingredients: [
        { name: 'Marhahús', quantity: '600g' },
        { name: 'Répa', quantity: '2' },
        { name: 'Burgonya', quantity: '1' },
        { name: 'Hagyma', quantity: '1' },
        { name: 'Pirospaprika', quantity: 'ízlés szerint' },
        { name: 'Só', quantity: 'ízlés szerint' },
        { name: 'Bors', quantity: 'ízlés szerint' }
      ],
      instructions: 'A hagymát dinszteljük, hozzáadjuk a húst, majd a zöldségeket. Fűszerezzük és készre főzzük.'
    }
    // Add more recipes if needed
  ];

  // Az összes receptet adja vissza
  getRecipes(): Recipe[] {
    return this.recipes;
  }

  // Receptet ad vissza ID alapján
  getRecipeById(id: string): Recipe | undefined {
    return this.recipes.find(recipe => recipe.id === id);
  }
}
