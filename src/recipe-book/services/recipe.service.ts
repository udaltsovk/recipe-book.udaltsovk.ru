import { APP_ID, computed, effect, inject, Injectable, signal, Signal } from "@angular/core";
import { Recipe } from "../models/recipe";
import { STORAGE } from "../tokens/storage.token";

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  private readonly recipeMap = signal<Map<Recipe["id"], Recipe>>(new Map());
  private readonly isInitialized = signal<boolean>(false);

  readonly recipes = computed(() => Array.from(this.recipeMap().values()));

  private readonly storage = inject(STORAGE);
  private readonly APP_ID = inject(APP_ID);
  private readonly STORAGE_KEY = `${this.APP_ID}::recipes`;

  constructor() {
    const recipesJson = this.storage.getItem(this.STORAGE_KEY);

    if (recipesJson) {
      const recipes: Recipe[] = JSON.parse(recipesJson);
      this.recipeMap.set(new Map(recipes.map(recipe => [recipe.id, recipe])));
      this.isInitialized.set(true);
    } else {
      import("../content/recipes").then(m => {
        const recipes: Recipe[] = m.recipes.map(defaultRecipe => ({
          ...defaultRecipe,
          id: RecipeService.generateId(),
        }));
        this.recipeMap.set(new Map(recipes.map(recipe => [recipe.id, recipe])));
        this.isInitialized.set(true);
      });
    }

    effect(() => {
      if (this.isInitialized()) {
        this.storage.setItem(this.STORAGE_KEY, JSON.stringify(this.recipes()));
      }
    });
  }

  findRecipe(
    recipeId: Recipe["id"] | Signal<Recipe["id"] | undefined>,
  ): Signal<Recipe | undefined> {
    if (typeof recipeId === "function") {
      return computed(() => {
        const id = recipeId();
        return id ? this.recipeMap().get(id) : undefined;
      });
    }

    return computed(() => this.recipeMap().get(recipeId));
  }

  static generateId = (): Recipe["id"] => crypto.randomUUID();

  saveRecipe(recipe: Recipe): void {
    this.recipeMap.update(recipesMap => {
      recipesMap.set(recipe.id, recipe);

      return new Map(recipesMap);
    });
  }

  deleteRecipe(recipeId: Recipe["id"]): void {
    this.recipeMap.update(recipesMap => {
      recipesMap.delete(recipeId);

      return new Map(recipesMap);
    });
  }
}
