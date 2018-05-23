import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    // ingredientChanged = new EventEmitter<Ingredient[]>();

    ingredientChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addFromShoppingList(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}