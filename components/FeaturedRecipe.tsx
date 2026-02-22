"use client";

import Link from "next/link";
import { Recipe } from "@/types/recipe";
import { capitalizeWord } from "@/utils/capitalizeWord";

type FeaturedRecipeProps = {
  recipe: Recipe;
};

export default function FeaturedRecipe({ recipe }: FeaturedRecipeProps) {
  return (
    <section className="flex h-[calc(100vh-64px)] px-8 py-8">
      <div className="flex w-1/2 flex-col justify-center px-16 overflow-y-auto bg-yellow-50">
        <p className="font-bold text-xl mt-12">Today Recipe is :</p>{" "}
        <h3 className="font-bold text-5xl mb-2">
          {capitalizeWord(recipe.name)}
        </h3>
        <p className="font-thin text-xl mb-6">Originated in {recipe.area}</p>
        <p className="font-thin italic mb-12">{recipe.categoryDescription}</p>
        <div className="flex justify-center mb-12">
          <Link
            className="w-fit rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-lg text-white hover:bg-yellow-500 active:bg-yellow-600 transition"
            href={`/recipe/${recipe.id}`}
          >
            VIEW RECIPE
          </Link>{" "}
        </div>
      </div>

      <div className="w-1/2 h-full overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
