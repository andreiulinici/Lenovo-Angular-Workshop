import { Component, type OnInit, type OnDestroy } from '@angular/core';
import { type Observable, Subscription } from 'rxjs';
import { RecipeService } from '../../services/recipe.service';
import type { Recipe } from '../../models/recipe.model';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { RecipeOfTheDayComponent } from '../../components/recipe-of-the-day/recipe-of-the-day.component';
import { RecipeFilterComponent } from '../../components/recipe-filter/recipe-filter.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RecipeCardComponent,
    RecipeOfTheDayComponent,
    RecipeFilterComponent,
    AsyncPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  recipeOfTheDay$!: Observable<Recipe>;
  recipes$!: Observable<Recipe[]>;
  filteredRecipes$!: Observable<Recipe[]>;

  private subscriptions = new Subscription();

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeOfTheDay$ = this.recipeService.getRecipeOfTheDay();
    this.recipes$ = this.recipeService.getRecipes();
    this.filteredRecipes$ = this.recipes$;
  }

  applyFilters(filters: {
    query: string;
    category: string;
    ingredient: string;
  }) {
    this.filteredRecipes$ = this.recipeService.searchRecipes(
      filters.query,
      filters.category,
      filters.ingredient
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
