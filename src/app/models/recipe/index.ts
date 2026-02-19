import { RecipeCategory as RecipeFoodType } from "./category";
import { RecipeKitchen } from "./kitchen";
import { Ingredient } from "../indgredient";
import { RecipeStep, RecipeStepCategory } from "./step";
import { RecipeDiet } from "./diet";

export type Recipe = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  title: string;
  description: string;
  imageUrl: string;
  foodTypes: RecipeFoodType[];
  kitchens: RecipeKitchen[];
  diets?: RecipeDiet[];
  durations: {
    preparation?: number;
    cooking: number;
  };
  calories: number;
  tools: string[];
  ingredients: Ingredient[];
  steps: RecipeStep[] | RecipeStepCategory[];
  notes?: string[];
};
