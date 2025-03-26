import { Component, Input } from "@angular/core"
import { RouterLink } from "@angular/router"
import type { Recipe } from "../../models/recipe.model"
import { StarRatingComponent } from "../star-rating/star-rating.component"

@Component({
  selector: "app-recipe-of-the-day",
  standalone: true,
  imports: [RouterLink, StarRatingComponent],
  templateUrl: "./recipe-of-the-day.component.html",
  styleUrl: "./recipe-of-the-day.component.scss",
})
export class RecipeOfTheDayComponent {
  @Input() recipe!: Recipe
}

