import { Component, Input } from "@angular/core"
import { NgFor } from "@angular/common"

@Component({
  selector: "app-star-rating",
  standalone: true,
  imports: [NgFor],
  templateUrl: "./star-rating.component.html",
  styleUrl: "./star-rating.component.scss",
})
export class StarRatingComponent {
  @Input() rating = 0
  @Input() showRating = true

  stars = Array(5)
}

