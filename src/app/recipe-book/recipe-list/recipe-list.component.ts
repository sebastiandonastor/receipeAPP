import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { recipeServices } from '../recipe.service';
@Component({
    selector: 'recipe-list',
   templateUrl: './recipe-list.component.html'   
})

export class RecipeListComponent implements OnInit {
    recipes : Recipe[
    ] = [];


    constructor(private recipeService : recipeServices){

    }


    ngOnInit() {
        this.recipes = this.recipeService.getRecetas();
    }
}