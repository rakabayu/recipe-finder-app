export function capitalizeWord(name: string) {
  if (!name) return "";

  return name
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
