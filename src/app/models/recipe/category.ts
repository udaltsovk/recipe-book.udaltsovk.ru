export const RecipeFoodTypes = [
  "Бульон",
  "Выпечка",
  "Десерт",
  "Завтрак",
  "Обед",
  "Основное блюдо",
  "Салат",
  "Соус",
  "Ужин",
] as const;

export type RecipeCategory = (typeof RecipeFoodTypes)[number];
