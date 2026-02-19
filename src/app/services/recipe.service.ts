import { computed, effect, Injectable, signal } from "@angular/core";
import { NewRecipe, Recipe } from "../models/recipe";
import { recipes as default_recipes } from "../content/recipes";

type Recipes = Map<Recipe["id"], Recipe>;

const assignId = (recipe: NewRecipe): Recipe => ({
  id: crypto.randomUUID(),
  ...recipe,
});

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  private readonly recipeMap = signal<Recipes>(new Map());

  readonly recipes = computed(() => Array.from(this.recipeMap().values()));

  private readonly LOCAL_STORAGE_KEY = "recipes::v0";

  constructor() {
    const recipesJson = localStorage.getItem(this.LOCAL_STORAGE_KEY);

    const recipes: Recipe[] = recipesJson ? JSON.parse(recipesJson) : default_recipes.map(assignId);

    this.recipeMap.set(new Map(recipes.map(recipe => [recipe.id, recipe])));

    effect(() => {
      localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.recipes()));
    });
  }

  createRecipe(recipe: NewRecipe): void {
    this.recipeMap.update(recipes => {
      const newRecipes = new Map(recipes);
      const newRecipe = assignId(recipe);

      newRecipes.set(newRecipe.id, newRecipe);

      return newRecipes;
    });
  }

  updateRecipe(updated_recipe: Recipe): void {
    this.recipeMap.update(recipes => {
      recipes.set(updated_recipe.id, updated_recipe);

      return new Map(recipes);
    });
  }

  deleteRecipe(recipe_id: Recipe["id"]): void {
    this.recipeMap.update(recipes => {
      recipes.delete(recipe_id);

      return new Map(recipes);
    });
  }
}
