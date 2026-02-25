"use client";

import Link from "next/link";
import { Recipe } from "@/types/recipe";
import { capitalizeWord } from "@/utils/capitalizeWord";

type FeaturedRecipeProps = {
  recipe: Recipe;
};

export default function FeaturedRecipe({ recipe }: FeaturedRecipeProps) {
  return (
    <section className="flex flex-col md:flex-row min-h-[calc(100vh-64px)] md:h-[calc(100vh-64px)] overflow-visible md:overflow-hidden px-4 md:px-8 py-6 md:py-8">
      <div className="h-64 md:h-full md:w-1/2 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center w-full md:w-1/2 px-6 md:px-16 bg-yellow-50 overflow-visible md:overflow-y-auto">
        <p className="font-bold text-xl mt-12 text-black">Today Recipe is :</p>{" "}
        <h3 className="font-bold text-5xl mb-2 text-black">
          {capitalizeWord(recipe.name)}
        </h3>
        <p className="font-thin text-xl mb-6 text-black">
          Originated in {recipe.area}
        </p>
        <p className="font-thin italic mb-12 text-black">
          {recipe.categoryDescription}
        </p>
        <div className="flex justify-center mb-12">
          <Link
            className="w-fit rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-lg text-white hover:bg-yellow-500 active:bg-yellow-600 transition"
            href={`/recipe/${recipe.id}`}
          >
            VIEW RECIPE
          </Link>{" "}
        </div>
      </div>
    </section>
  );
}
