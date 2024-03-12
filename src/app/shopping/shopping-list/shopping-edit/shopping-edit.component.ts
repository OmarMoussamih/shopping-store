import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() addIngredient = new EventEmitter<Ingredient>();

  onIngredientAdded() {
    this.addIngredient.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
  }

}
