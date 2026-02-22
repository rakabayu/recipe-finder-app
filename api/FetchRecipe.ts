export async function fetchRecipe(recipe: string) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`
    );

    //if API returns 404, 401, etc
    if (!res.ok) {
      throw new Error(`Failed to fetch recipe for ${recipe}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log("Recipe API Error:", err.message);
    } else {
      console.log("Unknown error", err);
    }

    return null;
  }
}
