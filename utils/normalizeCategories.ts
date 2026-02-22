import { MealDBCategory } from "@/types/mealdb";

export function normalizeCategories(
  categories: MealDBCategory[]
): Record<string, string> {
  return categories.reduce((map, category) => {
    map[category.strCategory] = category.strCategoryDescription;
    return map;
  }, {} as Record<string, string>);
}
