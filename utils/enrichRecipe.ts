import { MealDBRecipe } from "@/types/mealdb";
import { Recipe } from "@/types/recipe";

export function enrichRecipe(
  rawRecipe: MealDBRecipe,
  categoryMap: Record<string, string>
): Recipe {
  return {
    id: rawRecipe.idMeal,
    name: rawRecipe.strMeal,
    area: rawRecipe.strArea,
    image: rawRecipe.strMealThumb,
    instructions: rawRecipe.strInstructions,
    category: rawRecipe.strCategory,
    categoryDescription: categoryMap[rawRecipe.strCategory] ?? null,
  };
}
