import { MealDBRecipe } from "@/types/mealdb";

export function parseDirections(recipe: MealDBRecipe): string[] {
  return recipe.strInstructions
    .split(".")
    .map((list) => list.replace("\r\n", "").trim())
    .filter(Boolean);
}
