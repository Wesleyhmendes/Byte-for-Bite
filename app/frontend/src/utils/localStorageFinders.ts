import { DoneRecipeType } from '../type';

export const isRecipeInProgress = (route: string, id: string) => {
  const recipeType = route.split('/')[1];
  const inProgressExists = JSON.parse(localStorage.getItem('inProgressRecipes') as string) ;
  if (inProgressExists) {
    const foundRecipe = inProgressExists[recipeType][id as string] ? true : false;
    return foundRecipe;
  }
  return false;
}

export const isRecipeDone = (id: string) => {
  const isDoneExists = JSON.parse(localStorage.getItem('doneRecipes') as string);
  if (isDoneExists) {
    const isDone = isDoneExists.some((recipe: DoneRecipeType) => recipe.id === id as string);
    return isDone;
  }
  return false
}