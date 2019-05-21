import {Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { recipeServices } from './recipe.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
    selector: 'recipe-main',
    templateUrl: './recipe.component.html',
    providers: [recipeServices]
})

export class RecipeComponent implements OnInit{
    
    detalle : Recipe;

    constructor(private recipeServices : recipeServices){
        
    }
    ngOnInit(): void {
        this.recipeServices.recetaDetallosa.subscribe((receta) => {
            this.detalle = receta;
        });
    }
}