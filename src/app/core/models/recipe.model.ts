import { Ingredient } from './ingredient.model';
export interface Recipe {
    id: string;
    title: string;
    imageUrl: string;
    description: string;
    ingredients: Ingredient[];
    instructions: string;
}
  