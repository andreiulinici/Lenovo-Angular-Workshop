import { Injectable } from "@angular/core"
import { BehaviorSubject, type Observable } from "rxjs"
import { map } from "rxjs/operators"
import type { Recipe } from "../models/recipe.model"

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  private recipesSubject = new BehaviorSubject<Recipe[]>([
    {
      id: "1",
      name: "Garlic Butter Shrimp Pasta",
      description: "A quick and delicious pasta dish with succulent shrimp tossed in a garlic butter sauce.",
      image: "assets/images/placeholder.svg",
      rating: 4.8,
      time: 25,
      calories: 450,
      netCarbs: 48,
      protein: 28,
      fat: 18,
      categories: ["Main Dish", "Pasta", "Seafood", "Quick Meals"],
      difficulty: "Easy",
      area: "Italian",
      ingredients: [
        "8 oz linguine pasta",
        "1 lb large shrimp, peeled and deveined",
        "4 tbsp butter",
        "4 cloves garlic, minced",
        "1/2 tsp red pepper flakes",
        "1/4 cup white wine",
        "2 tbsp lemon juice",
        "1/4 cup chopped parsley",
        "Salt and pepper to taste",
        "Grated Parmesan cheese for serving",
      ],
      instructions: [
        "Cook pasta according to package instructions. Reserve 1/2 cup of pasta water before draining.",
        "In a large skillet, melt 2 tablespoons of butter over medium-high heat.",
        "Add shrimp, season with salt and pepper, and cook until pink and opaque, about 2-3 minutes per side. Remove shrimp and set aside.",
        "In the same skillet, add remaining butter, garlic, and red pepper flakes. Cook until fragrant, about 1 minute.",
        "Add white wine and lemon juice, simmer for 2-3 minutes until slightly reduced.",
        "Return shrimp to the skillet, add drained pasta, and toss to combine. If needed, add some reserved pasta water to loosen the sauce.",
        "Stir in chopped parsley and adjust seasoning if necessary.",
        "Serve immediately with grated Parmesan cheese on top.",
      ],
    },
    {
      id: "2",
      name: "Chicken Tikka Masala",
      description: "A flavorful Indian curry dish with tender chicken in a creamy tomato sauce.",
      image: "assets/images/placeholder.svg",
      rating: 4.7,
      time: 45,
      calories: 520,
      netCarbs: 12,
      protein: 35,
      fat: 22,
      categories: ["Main Dish", "Chicken", "Indian", "Curry"],
      difficulty: "Medium",
      area: "Indian",
      ingredients: [
        "1.5 lbs boneless chicken thighs, cut into pieces",
        "1 cup plain yogurt",
        "2 tbsp lemon juice",
        "6 cloves garlic, minced",
        "1 tbsp ginger, grated",
        "2 tsp garam masala",
        "2 tsp ground cumin",
        "2 tsp paprika",
        "1 large onion, diced",
        "2 tbsp vegetable oil",
        "1 can (14 oz) tomato sauce",
        "1 cup heavy cream",
        "2 tbsp fresh cilantro, chopped",
        "Salt to taste",
      ],
      instructions: [
        "In a bowl, mix yogurt, lemon juice, half the garlic, half the ginger, 1 tsp garam masala, 1 tsp cumin, and 1 tsp paprika.",
        "Add chicken to the marinade, cover, and refrigerate for at least 1 hour (or overnight for best results).",
        "Preheat oven to 425°F (220°C). Place marinated chicken on a baking sheet and bake for 15 minutes.",
        "Meanwhile, heat oil in a large skillet over medium heat. Add onion and cook until soft, about 5 minutes.",
        "Add remaining garlic, ginger, garam masala, cumin, and paprika. Cook for 1 minute until fragrant.",
        "Stir in tomato sauce and bring to a simmer. Cook for 10-15 minutes until sauce thickens.",
        "Add cooked chicken pieces, including any juices. Simmer for 5 minutes.",
        "Stir in heavy cream and simmer for another 5-10 minutes until the sauce thickens to your liking.",
        "Season with salt to taste and garnish with fresh cilantro before serving.",
      ],
    },
    {
      id: "3",
      name: "Avocado Toast with Poached Egg",
      description: "A nutritious breakfast featuring creamy avocado and perfectly poached eggs on toasted bread.",
      image: "assets/images/placeholder.svg",
      rating: 4.5,
      time: 15,
      calories: 320,
      netCarbs: 18,
      protein: 14,
      fat: 22,
      categories: ["Breakfast", "Vegetarian", "Quick Meals", "Healthy"],
      difficulty: "Easy",
      area: "American",
      ingredients: [
        "2 slices whole grain bread",
        "1 ripe avocado",
        "2 large eggs",
        "1 tbsp white vinegar",
        "1/2 lemon, juiced",
        "Red pepper flakes",
        "Salt and black pepper to taste",
        "Fresh herbs (such as chives or cilantro) for garnish",
      ],
      instructions: [
        "Toast the bread slices until golden and crisp.",
        "In a small bowl, mash the avocado with lemon juice, salt, and pepper.",
        "Fill a medium pot with about 3 inches of water. Add vinegar and bring to a gentle simmer.",
        "Crack each egg into a small cup. Create a gentle whirlpool in the water and carefully slide in the eggs one at a time.",
        "Poach eggs for 3-4 minutes for a runny yolk, or longer if desired.",
        "Spread the mashed avocado evenly on the toast slices.",
        "Using a slotted spoon, remove the poached eggs, drain excess water, and place on top of the avocado toast.",
        "Sprinkle with red pepper flakes, additional salt and pepper if desired, and garnish with fresh herbs.",
      ],
    },
    {
      id: "4",
      name: "Chocolate Chip Cookies",
      description: "Classic homemade cookies with the perfect balance of chewy centers and crisp edges.",
      image: "assets/images/placeholder.svg",
      rating: 4.9,
      time: 30,
      calories: 180,
      netCarbs: 22,
      protein: 2,
      fat: 10,
      categories: ["Dessert", "Baking", "Cookies", "Snack"],
      difficulty: "Easy",
      area: "American",
      ingredients: [
        "1 cup (2 sticks) unsalted butter, softened",
        "3/4 cup granulated sugar",
        "3/4 cup packed brown sugar",
        "2 large eggs",
        "2 tsp vanilla extract",
        "2 1/4 cups all-purpose flour",
        "1 tsp baking soda",
        "1/2 tsp salt",
        "2 cups semi-sweet chocolate chips",
        "1 cup chopped walnuts (optional)",
      ],
      instructions: [
        "Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.",
        "In a large bowl, cream together butter, granulated sugar, and brown sugar until light and fluffy.",
        "Beat in eggs one at a time, then stir in vanilla.",
        "In a separate bowl, whisk together flour, baking soda, and salt.",
        "Gradually add dry ingredients to the wet ingredients, mixing just until combined.",
        "Fold in chocolate chips and walnuts if using.",
        "Drop rounded tablespoons of dough onto the prepared baking sheets, spacing them about 2 inches apart.",
        "Bake for 9-11 minutes or until golden brown around the edges but still soft in the center.",
        "Allow cookies to cool on the baking sheet for 5 minutes before transferring to a wire rack to cool completely.",
      ],
    },
    {
      id: "5",
      name: "Vegetable Stir Fry",
      description: "A colorful and nutritious stir fry loaded with fresh vegetables in a savory sauce.",
      image: "assets/images/placeholder.svg",
      rating: 4.3,
      time: 20,
      calories: 250,
      netCarbs: 18,
      protein: 8,
      fat: 14,
      categories: ["Vegetarian", "Vegan", "Healthy", "Quick Meals"],
      difficulty: "Easy",
      area: "Asian",
      ingredients: [
        "2 tbsp vegetable oil",
        "2 cloves garlic, minced",
        "1 tbsp ginger, grated",
        "1 bell pepper, sliced",
        "1 carrot, julienned",
        "1 cup broccoli florets",
        "1 cup snap peas",
        "1 cup mushrooms, sliced",
        "2 tbsp soy sauce",
        "1 tbsp rice vinegar",
        "1 tsp sesame oil",
        "1 tsp honey or maple syrup",
        "1/2 tsp red pepper flakes (optional)",
        "Sesame seeds for garnish",
        "Sliced green onions for garnish",
      ],
      instructions: [
        "In a small bowl, whisk together soy sauce, rice vinegar, sesame oil, honey, and red pepper flakes if using. Set aside.",
        "Heat vegetable oil in a large wok or skillet over high heat.",
        "Add garlic and ginger, stir-fry for 30 seconds until fragrant.",
        "Add carrots and broccoli, stir-fry for 2 minutes.",
        "Add bell pepper, snap peas, and mushrooms. Stir-fry for another 3-4 minutes until vegetables are crisp-tender.",
        "Pour the sauce over the vegetables and toss to coat evenly. Cook for another minute.",
        "Garnish with sesame seeds and sliced green onions before serving.",
        "Serve hot over rice or noodles if desired.",
      ],
    },
    {
      id: "6",
      name: "Beef Tacos",
      description: "Flavorful ground beef tacos with all the fresh toppings for a perfect taco night.",
      image: "assets/images/placeholder.svg",
      rating: 4.6,
      time: 25,
      calories: 380,
      netCarbs: 15,
      protein: 22,
      fat: 24,
      categories: ["Main Dish", "Mexican", "Beef", "Quick Meals"],
      difficulty: "Easy",
      area: "Mexican",
      ingredients: [
        "1 lb ground beef",
        "1 small onion, diced",
        "2 cloves garlic, minced",
        "1 tbsp chili powder",
        "1 tsp ground cumin",
        "1/2 tsp paprika",
        "1/2 tsp dried oregano",
        "1/4 tsp cayenne pepper (optional)",
        "Salt and pepper to taste",
        "8 small corn or flour tortillas",
        "1 cup shredded lettuce",
        "1 cup diced tomatoes",
        "1/2 cup shredded cheddar cheese",
        "1/4 cup sour cream",
        "1 avocado, sliced or diced",
        "Fresh cilantro, chopped",
        "Lime wedges for serving",
        "Hot sauce (optional)",
      ],
      instructions: [
        "Heat a large skillet over medium-high heat. Add ground beef and cook until no longer pink, breaking it up as it cooks.",
        "Add diced onion and cook until softened, about 3-4 minutes.",
        "Add garlic and cook for another 30 seconds until fragrant.",
        "Stir in chili powder, cumin, paprika, oregano, cayenne (if using), salt, and pepper.",
        "Reduce heat to medium-low and cook for 2-3 minutes to allow flavors to blend.",
        "If the mixture seems dry, add 2-3 tablespoons of water and stir.",
        "Warm the tortillas according to package instructions or in a dry skillet.",
        "To assemble tacos, place a spoonful of the beef mixture in each tortilla and top with lettuce, tomatoes, cheese, sour cream, avocado, and cilantro.",
        "Serve with lime wedges and hot sauce on the side.",
      ],
    },
  ])

  constructor() {}

  getRecipes(): Observable<Recipe[]> {
    return this.recipesSubject.asObservable()
  }

  getRecipeById(id: string): Observable<Recipe | undefined> {
    return this.recipesSubject.pipe(map((recipes) => recipes.find((recipe) => recipe.id === id)))
  }

  getRecipeOfTheDay(): Observable<Recipe> {
    // For simplicity, return the first recipe as recipe of the day
    return this.recipesSubject.pipe(map((recipes) => recipes[0]))
  }

  searchRecipes(query: string, category?: string, ingredient?: string): Observable<Recipe[]> {
    return this.recipesSubject.pipe(
      map((recipes) => {
        let filteredRecipes = recipes

        if (query) {
          const lowerCaseQuery = query.toLowerCase()
          filteredRecipes = filteredRecipes.filter(
            (recipe) =>
              recipe.name.toLowerCase().includes(lowerCaseQuery) ||
              recipe.description.toLowerCase().includes(lowerCaseQuery),
          )
        }

        if (category && category !== "all") {
          filteredRecipes = filteredRecipes.filter((recipe) =>
            recipe.categories.some((cat) => cat.toLowerCase() === category.toLowerCase()),
          )
        }

        if (ingredient && ingredient !== "all") {
          filteredRecipes = filteredRecipes.filter((recipe) =>
            recipe.ingredients.some((ing) => ing.toLowerCase().includes(ingredient.toLowerCase())),
          )
        }

        return filteredRecipes
      }),
    )
  }
}

