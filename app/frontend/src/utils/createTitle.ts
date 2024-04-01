function createTitle(route: string, recipe: any) {
  if (recipe) {
    return `${route === '/meals'
      ? `Details | ${recipe.strMeal} Meal`
      : `Details | ${recipe.strDrink} Cocktail`}`;
  }

  return route === '/meals'
    ? 'Details | Meal'
    : 'Details | Cocktail';
}

export default createTitle;
