import {Component, OnInit } from '@angular/core';
import { Ingredient } from '../share/ingredient.model';
import { IngredientService } from './ingredients.service';

@Component({
    selector: 'shopping-list',
    templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent implements OnInit {
    ingredients : Ingredient[] = [];


    constructor(private ingredientService : IngredientService){}
    ngOnInit(){
        this.ingredients = this.ingredientService.getIngredients();
        this.ingredientService.IngredienteAgregado.subscribe((list)=> {
            this.ingredients = list;
        });
    }
    
   
}