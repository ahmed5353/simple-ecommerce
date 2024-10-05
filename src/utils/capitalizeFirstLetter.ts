export function capitalizeFirstLetter(
  category: string | null | undefined
): string {
  if (!category) return '';
  return category[0].toUpperCase() + category.slice(1);
}
