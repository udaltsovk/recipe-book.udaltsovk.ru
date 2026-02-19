export const RecipeKitchens = [
  "Казахская",
  "Киргизская",
  "Русская",
  "Современная",
  "Таджикская",
  "Узбекская",
] as const;

export type RecipeKitchen = (typeof RecipeKitchens)[number];
