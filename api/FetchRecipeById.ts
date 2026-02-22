export async function fetchRecipeById(id: string) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch id");
  }
  const fetchId = res.json();
  return fetchId;
}
