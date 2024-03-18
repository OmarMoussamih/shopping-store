import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit{
  selectedItem: Recipe;

  constructor(private recipeService: RecipeService) {}
  
  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      recipe => this.selectedItem = recipe
    )
  }


  onRecipeSelection(selectedItem) {
    console.log(selectedItem);
    this.selectedItem = selectedItem;
  }
}
