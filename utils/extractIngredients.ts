import { MealDBRecipe } from "@/types/mealdb";

type IngredientItem = {
  ingredient: string | null;
  measure: string | null;
};

export default function extractIngredients(recipe: MealDBRecipe) {
  const ingredients: IngredientItem[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({
        ingredient,
        measure,
      });
    }
  }
  console.log(ingredients);
  return ingredients;
}
