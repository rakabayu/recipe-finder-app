export type MealDBCategory = {
  strCategory: string;
  strCategoryDescription: string;
};

export type MealDBRecipe = {
  idMeal: string;
  strMeal: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strCategory: string;
  [key: string]: string | null;
};

export type MealDBSearchRecipe = {
  idMeal: string;
  strMeal: string;
};
