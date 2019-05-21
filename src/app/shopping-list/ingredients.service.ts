import { Ingredient } from '../share/ingredient.model';
import { EventEmitter } from '@angular/core';

export class IngredientService {
    ingredients : Ingredient[] = [new Ingredient('Manzanita',10),new Ingredient('Tomatitos',20)];
    IngredienteAgregado = new EventEmitter<Ingredient[]>();

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient : Ingredient ){
        this.ingredients.push(ingredient);
        this.IngredienteAgregado.emit(this.getIngredients());
    }

    addIngredients(ingredients : Ingredient []){
        this.ingredients.push(...ingredients);
        this.IngredienteAgregado.emit(this.getIngredients());
    }

}