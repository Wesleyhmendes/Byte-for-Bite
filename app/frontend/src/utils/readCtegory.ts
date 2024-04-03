export default function setCategoryClass(selectedCategory: string, strCategory: string) {
  if (selectedCategory === strCategory) return 'active';
  return '';
}
