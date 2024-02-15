import { DrinkType, MealType } from '../../type';

export const finishRecipe = (typeRecipe: string, recipe: MealType | DrinkType) => {
  const finishedRecipe = {
    id: typeRecipe === 'meals' ? recipe.idMeal : recipe.idDrink,
    type: typeRecipe.replace('s', ''),
    nationality: typeRecipe === 'meals' ? recipe.strArea : '',
    category: recipe.strCategory,
    alcoholicOrNot: typeRecipe === 'meals' ? '' : recipe.strAlcoholic,
    name: typeRecipe === 'meals' ? recipe.strMeal : recipe.strDrink,
    image: typeRecipe === 'meals' ? recipe.strMealThumb : recipe.strDrinkThumb,
    doneDate: new Date().toISOString(),
    tags: recipe.strTags ? recipe.strTags.split(',') : [],
  };
  if (localStorage.getItem('doneRecipes')) {
    const storeData = JSON.parse(localStorage.getItem('doneRecipes') as string);
    localStorage.setItem('doneRecipes', JSON.stringify([...storeData, finishedRecipe]));
  } else {
    localStorage.setItem('doneRecipes', JSON.stringify([finishedRecipe]));
  }
};
