import { Component, Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  selectedItem: Recipe;

  onRecipeSelection(selectedItem) {
    console.log(selectedItem);
    this.selectedItem = selectedItem;
  }
}
