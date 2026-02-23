export async function fetchRandomRecipe() {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/random.php`,
      { cache: "no-store" }
    );

    //if API returns 404, 401, etc.
    if (!res.ok) {
      throw new Error(`Failed to fetch recipe of the day 🙁`);
    }

    const data = await res.json();
    console.log("random:", data);
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log("Recipe API Error", err.message);
    } else {
      console.log("Unknown error:", err);
    }
  }
}
