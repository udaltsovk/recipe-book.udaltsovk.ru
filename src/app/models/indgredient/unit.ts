export const IngredientUnits = ["г", "шт", "ст.л.", "ч.л.", "мл", "стакана"] as const;

export type IngredientUnit = (typeof IngredientUnits)[number];
