// "use client";

// import { fetchRandomRecipe } from "@/api/FetchRandomRecipe";
// import FeaturedRecipe from "@/components/FeaturedRecipe";
// import { useEffect, useState } from "react";
// import { Recipe } from "@/types/recipe";

// export default function HomeClient() {
//   const [randomRecipe, setRandomRecipe] = useState<Recipe | null>(null);

//   useEffect(() => {
//     async function loadFeaturedRecipe() {
//       const res = await fetchRandomRecipe();
//       console.log(res);

//       //code by AI: [Defensive Guard Close] !res if res return null, !res.meals if there's any backend change, res.meals.length === 0 if res return empty array

//       if (!res || !res.meals || res.meals.length === 0) return;

//       const recipe: Recipe = {
//         id: res.meals[0].idMeal,
//         name: res.meals[0].strMeal,
//         area: res.meals[0].strArea,
//         image: res.meals[0].strMealThumb,
//         instructions: res.meals[0].strInstructions,
//         category: res.meals[0].strCategory,
//         categoryDescription: "",
//       };

//       setRandomRecipe(recipe);
//     }

//     loadFeaturedRecipe();
//   }, []);

//   return (
//     <div>
//       {/* Featured Recipe Section */}
//       {randomRecipe && <FeaturedRecipe recipe={randomRecipe} />}
//     </div>
//   );
// }

import { fetchRandomRecipe } from "@/api/FetchRandomRecipe";
import { fetchCategories } from "@/api/FetchCategories";
import { normalizeCategories } from "@/utils/normalizeCategories";
import { enrichRecipe } from "@/utils/enrichRecipe";
import FeaturedRecipe from "@/components/FeaturedRecipe";

export default async function HomePage() {
  const randomRes = await fetchRandomRecipe();
  const categoryRes = await fetchCategories();

  if (!randomRes || !categoryRes) return null;

  const categoryMap = normalizeCategories(categoryRes.categories);

  const recipe = enrichRecipe(randomRes.meals[0], categoryMap);

  return <FeaturedRecipe recipe={recipe} />;
}
