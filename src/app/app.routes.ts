import type { Routes } from "@angular/router"

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "recipe/:id",
    loadComponent: () => import("./pages/recipe-detail/recipe-detail.component").then((m) => m.RecipeDetailComponent),
  },
  {
    path: "**",
    redirectTo: "",
  },
]

