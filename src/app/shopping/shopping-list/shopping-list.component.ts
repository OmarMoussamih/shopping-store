import { Component } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {

  ingredients:Ingredient[] = [
    new Ingredient('Tomato', 5),
    new Ingredient('Potato', 4)
  ];


  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
