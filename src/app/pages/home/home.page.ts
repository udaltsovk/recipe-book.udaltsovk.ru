import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RecipeCardComponent } from "../../components/recipe-card/recipe-card.component";
import { RecipeService } from "../../services/recipe.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrl: "./home.page.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RecipeCardComponent],
})
export class HomePage {
  private readonly recipeService = inject(RecipeService);

  protected readonly recipes = this.recipeService.recipes;
}
