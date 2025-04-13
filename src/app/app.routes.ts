import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipeListComponent } from './pages/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './pages/recipes/recipe-detail/recipe-detail.component';
import { ProfileComponent } from './pages/profile/profile.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'recipe-list', component: RecipeListComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'recipe-detail/:id', component: RecipeDetailComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
    { path: '**', redirectTo: 'home' } // Wildcard fallback


];
