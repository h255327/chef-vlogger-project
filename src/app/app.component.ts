import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RecipeDetailComponent } from './pages/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './pages/recipes/recipe-list/recipe-list.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, ProfileComponent, RecipeDetailComponent, RecipeListComponent, MenuComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chef-vlog-project'; 

  page = "home"; 

}
