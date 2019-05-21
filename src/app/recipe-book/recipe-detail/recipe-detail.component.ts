import {Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { recipeServices } from '../recipe.service';

@Component({
    selector: 'recipe-detail',
    templateUrl: './recipe-detail.component.html'
})

export class RecipeDetailComponent {
    @Input() detalle : Recipe;


    constructor(private recipeService : recipeServices){

    }

    IrAIngredientes(){
        this.recipeService.addIngredientsToShopping(this.detalle.ingredients);
    }
    
}