export const RecipeDiets = ["Безглютеновая"] as const;

export type RecipeDiet = (typeof RecipeDiets)[number];
