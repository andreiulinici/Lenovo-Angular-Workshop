import { Component, type OnInit, type OnDestroy } from "@angular/core"
import { ActivatedRoute, RouterLink } from "@angular/router"
import { NgFor, AsyncPipe } from "@angular/common"
import { type Observable, Subscription, switchMap } from "rxjs"
import { RecipeService } from "../../services/recipe.service"
import type { Recipe } from "../../models/recipe.model"
import { StarRatingComponent } from "../../components/star-rating/star-rating.component"

@Component({
  selector: "app-recipe-detail",
  standalone: true,
  imports: [RouterLink, NgFor, StarRatingComponent, AsyncPipe],
  templateUrl: "./recipe-detail.component.html",
  styleUrl: "./recipe-detail.component.scss",
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe$!: Observable<Recipe | undefined>
  private subscription = new Subscription()

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
  ) {}

  ngOnInit() {
    this.recipe$ = this.route.params.pipe(switchMap((params) => this.recipeService.getRecipeById(params["id"])))
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}

