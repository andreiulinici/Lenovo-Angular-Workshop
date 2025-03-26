import { Component, EventEmitter, Output } from "@angular/core"
import { FormsModule } from "@angular/forms"

@Component({
  selector: "app-recipe-filter",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./recipe-filter.component.html",
  styleUrl: "./recipe-filter.component.scss",
})
export class RecipeFilterComponent {
  @Output() filterChange = new EventEmitter<{
    query: string
    category: string
    ingredient: string
  }>()

  searchQuery = ""
  selectedCategory = "all"
  selectedIngredient = "all"

  onFilterChange() {
    this.filterChange.emit({
      query: this.searchQuery,
      category: this.selectedCategory,
      ingredient: this.selectedIngredient,
    })
  }
}

