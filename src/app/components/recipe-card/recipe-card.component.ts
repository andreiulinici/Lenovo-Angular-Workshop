import { Component, Input } from "@angular/core"
import { RouterLink } from "@angular/router"
import { NgFor } from "@angular/common"
import type { Recipe } from "../../models/recipe.model"
import { StarRatingComponent } from "../star-rating/star-rating.component"

@Component({
  selector: "app-recipe-card",
  standalone: true,
  imports: [RouterLink, NgFor, StarRatingComponent],
  templateUrl: "./recipe-card.component.html",
  styleUrl: "./recipe-card.component.scss",
})
export class RecipeCardComponent {
  @Input() recipe!: Recipe
}

