import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'; 

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('First Test Recipe', 'This is simply a test', 'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'),
    new Recipe('Second Test Recipe', 'This is simply a test', 'https://www.maxpixel.net/static/photo/2x/Food-Dishes-Eat-Gastronomy-Lunch-Recipe-2760200.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
