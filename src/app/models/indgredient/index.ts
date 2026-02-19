import { IngredientUnit } from "./unit";

export type Ingredient = {
  name: string;
  amount?: { value: number; unit: IngredientUnit };
  note?: string;
};
