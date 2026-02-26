"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MealDBSearchRecipe } from "@/types/mealdb";

type SearchRecipeRes = {
  meals: MealDBSearchRecipe;
  id: string;
  name: string;
};

export default function SearchBar() {
  const route = useRouter();

  const [query, setQuery] = useState("");
  const [allRecipe, setAllRecipe] = useState<SearchRecipeRes[]>([]);
  const [suggestions, setSuggestions] = useState<SearchRecipeRes[]>([]);
  const [isFoucused, setIsFocused] = useState(false);

  //1. store all recipe name once
  useEffect(() => {
    async function loadRecipe() {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );

      const data = await res.json();

      if (!data.meals) return;

      const simplified = data.meals.map((meal: MealDBSearchRecipe) => ({
        id: meal.idMeal,
        name: meal.strMeal,
      }));

      setAllRecipe(simplified);
    }

    loadRecipe();
  }, []);

  //2. handle input change and suggestions
  function handleChange(value: string) {
    setQuery(value);

    if (value.length < 3) {
      setSuggestions([]);
      return;
    }

    const matches = allRecipe.filter((recipe) =>
      recipe.name.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(matches);
  }

  //3. navigate to detail page
  function handleSelect(id: string) {
    setQuery("");
    setSuggestions([]);
    route.push(`/recipe/${id}`);
  }

  return (
    // <form onSubmit={handleSubmit} className="flex items-center gap-2 py-2">
    //   <input
    //     type="text"
    //     value={recipe}
    //     placeholder="What are your craving for?"
    //     onChange={(e) => setRecipe(e.target.value)}
    //     className="w-full rounded-full border bg-white px-4 py-2 text-sm outline-none min-w-0 focus:border-green-400 focus:ring-2 focus:ring-green-200"
    //   />
    //   <button
    //     type="submit"
    //     className="rounded-full bg-green-400 px-4 py-2 text-sm font-medium text-white hover:bg-green-500 active:bg-green-600 transition"
    //   >
    //     Search
    //   </button>
    // </form>
    <div className="relative flex items-center gap-2 py-2">
      <Image src="/icons/search.png" alt="Search" width={20} height={20} />
      <input
        type="text"
        value={query}
        placeholder="What are you craving for?"
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full rounded-full border bg-white px-4 py-2 text-sm outline-none min-w-0 text-black focus:border-blue-400 focus:ring-2 focus:ring-green-200"
      />

      {/* DROPDOWN */}
      {isFoucused && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border rounded shadow mt-1">
          {suggestions.map((item) => (
            <li
              key={item.id}
              onMouseDown={() => handleSelect(item.id)}
              className="px-3 py-2 cursor-pointer hover:bg-gray-100 text-black"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
