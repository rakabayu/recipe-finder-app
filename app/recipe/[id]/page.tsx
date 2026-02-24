import { fetchRecipeById } from "@/api/FetchRecipeById";
import { MealDBRecipe } from "@/types/mealdb";
import extractIngredients from "@/utils/extractIngredients";
import { parseDirections } from "@/utils/parseDirections";
import { capitalizeWord } from "@/utils/capitalizeWord";

type RecipeDetailPageProps = {
  params: {
    id: string;
  };
};

export default async function RecipeDetailPage({
  params,
}: RecipeDetailPageProps) {
  const { id } = await params;
  const res = await fetchRecipeById(id);
  console.log("result :", res);

  //Defensive guard for API response (by AI)
  if (!res || !res.meals || res.meals.length === 0) {
    return <div>Recipe not found</div>;
  }
  const recipe: MealDBRecipe = res.meals[0];
  console.log("Recipe :", recipe);
  console.log("inst:", recipe.strInstructions);

  const ingredients = extractIngredients(recipe);
  const directions = parseDirections(recipe);

  return (
    <div
      className="flex flex-col md:flex-row
      min-h-[calc(100vh-64px)]
      md:h-[calc(100vh-64px)]
      w-full
      overflow-visible md:overflow-hidden
      px-4 md:px-8
      py-4 md:py-8"
    >
      <div className="h-64 md:h-full md:w-1/2">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="h-full w-full object-cover"
        />
      </div>
      {/* <div className="py-8 px-8 flex-col justify-center"> */}
      <div
        className="w-full md:w-1/2
        overflow-visible md:overflow-y-auto
        px-4 md:px-8
        py-6
        bg-yellow-50"
      >
        <h2 className="font-bold text-5xl mb-2 text-black">
          {capitalizeWord(recipe.strMeal)}
        </h2>
        <span className="font-thin text-xl text-black">
          Originate in: {recipe.strArea}
        </span>
        <div className=" mt-4 mb-4">
          <h3 className="font-bold text-black">List of Ingredients:</h3>
          <ul className="mt-2 space-y-2 list-none">
            {ingredients.map((item, index) => (
              <li key={index} className="flex gap-3 text-black">
                <span className="w-6 text-right font-semibold text-black">
                  {index + 1}.
                </span>{" "}
                {item.measure} {item.ingredient}.
              </li>
            ))}
          </ul>
        </div>
        <div className=" mt-4 mb-4">
          <h3 className="font-bold text-black">Directions:</h3>
          <ul className="mt-2 space-y-2 list-none text-black">
            {directions.map((item, index) => (
              <li key={index} className="flex gap-3 text-black">
                <span className="w-6 text-right font-semibold">
                  {index + 1}.
                </span>{" "}
                {item}.
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
