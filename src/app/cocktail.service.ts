import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktails : Cocktail[] =[
    {name: "mojito", price : 30, img : "https://img.cuisineaz.com/240x192/2013-12-20/i14978-recette-de-mojito.jpeg"},
    {name : "caipirinha", price : 123, img : "https://randypreising.com/wp-content/uploads/2018/01/caipirinha-preising-800x800.jpg"}

  ];




  constructor() { }

  public getCocktails() :Cocktail [] {
    return this.cocktails;
  }
}
