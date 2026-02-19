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

export type RecipeFoodType = (typeof RecipeFoodTypes)[number];
