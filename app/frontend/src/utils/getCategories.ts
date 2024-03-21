export default function getCategories(id: number): string {
  switch (id) {
    case 1: return 'Beef';
    case 2: return 'Chicken';
    case 3: return 'Dessert';
    case 4: return 'Lamb';
    case 5: return 'Others';
    case 6: return 'Pasta';
    case 7: return 'Pork';
    case 8: return 'Seafood';
    case 9: return 'Side';
    case 10: return 'Starter';
    case 11: return 'Vegan';
    case 12: return 'Vegetarian';
    case 13: return 'Breakfast';
    case 14: return 'Goat';
    default: return 'All';
  }
}
