import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit{

  ingredients:Ingredient[]

  constructor(private shoppingService: ShoppingService) {}
  
  ngOnInit(){
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientChanged.subscribe(
      ingredients => this.ingredients = ingredients
    )
  }
}
