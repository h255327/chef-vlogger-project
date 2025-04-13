import { Recipe } from './recipe.model';

interface Profile {
    name: string;
    username: string;
    bio: string;
    avatarUrl: string;
    recipes: Recipe[];
  }