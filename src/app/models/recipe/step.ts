export type RecipeStepCategory = {
  name: string;
  steps: RecipeStep[];
};

export type RecipeStep = {
  body: string;
  ingredients?: number[];
  imageUrl?: string;
};
