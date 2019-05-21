import {Component, Input} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { recipeServices } from '../../recipe.service';

@Component({
    selector: 'recipe-item',
    templateUrl: './recipe-item.component.html'
})

export class RecipeItemComponent {
    @Input() recipe : Recipe;


    constructor(private recipeService : recipeServices) {

    }
    VerDetalles(){
        this.recipeService.verDetalles(this.recipe);
        console.log('emitido en recipe-item');
    }

}