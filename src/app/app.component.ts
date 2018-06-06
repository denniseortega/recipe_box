import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentTitle: string = 'Recipe Box';
  recipes: Recipe[] = [
    new Recipe('Breakfast','Eggs, Toasted Bread, Milk','Heat Up'),
    new Recipe('Dinner', 'Spring Mix', 'Mix Together')
  ];
}
