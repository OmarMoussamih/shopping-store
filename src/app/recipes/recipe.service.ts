import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel Recipe', 
    'This is a test recipe 1', 
    'https://www.visitcapecoral.de/wp/wp-content/uploads/2016/10/wiener-schnitzel.jpg',
    [new Ingredient('Tomato', 5),
    new Ingredient('Potato', 4)]
    ), 
    new Recipe('Big Fat Burger', 
    'This is a test recipe 2', 
    'https://www.diningandcooking.com/wp-content/uploads/2021/03/tol37mh13lk61.jpg',
    [new Ingredient('Bread', 2),
    new Ingredient('Meat', 3),
    new Ingredient('Cheese', 1),
    new Ingredient('Bacon', 1)]
    )
  ];

  recipeSelected = new EventEmitter<Recipe>(); 

  constructor() { }

  getRecipe() {
    return this.recipes.slice(); 
  }
}
