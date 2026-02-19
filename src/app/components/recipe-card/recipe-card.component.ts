import { ChangeDetectionStrategy, Component, inject, input } from "@angular/core";
import { Recipe } from "../../models/recipe";
import { RecipeService } from "../../services/recipe.service";

@Component({
  selector: "app-recipe-card",
  templateUrl: "./recipe-card.component.html",
  styleUrl: "./recipe-card.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class RecipeCardComponent {
  private readonly recipeService = inject(RecipeService);

  readonly recipe = input.required<Recipe>();

  protected delete(): void {
    this.recipeService.deleteRecipe(this.recipe().id);
  }
}
