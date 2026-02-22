export async function fetchCategories() {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch category 🙁`);
    }

    const data = await res.json();
    console.log("cat:", data);
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log("Recipe API error", err.message);
    } else {
      console.log("Unknown error", err);
    }
    return null;
  }
}
