import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test recipe', 'https://1.bp.blogspot.com/-p21fd82K4X4/WtVw0Wl2_JI/AAAAAAAAE6Q/m8u8gXxbhvUEYemlNctIP0sSUaB7AaW-QCLcBGAs/s1600/IMG_6020.JPG'), 
    new Recipe('Test Recipe', 'This is a test recipe', 'https://1.bp.blogspot.com/-p21fd82K4X4/WtVw0Wl2_JI/AAAAAAAAE6Q/m8u8gXxbhvUEYemlNctIP0sSUaB7AaW-QCLcBGAs/s1600/IMG_6020.JPG')
  ];

  @Output() recipeSelection = new EventEmitter<Recipe>(); 

  onRecipeItemSelection(recipe:Recipe) {
    this.recipeSelection.emit(recipe);
  }

}
