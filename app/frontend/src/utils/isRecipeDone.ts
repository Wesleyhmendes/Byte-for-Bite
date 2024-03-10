import { IngredientListType } from '../type';

const isRecipeDone = (ingredients: string[], ingredientList: IngredientListType) => {
  const ingredientQuantity = ingredients.length;
  const ingredientListEntries = Object.entries(ingredientList);
  const sameSizeIngredientList = ingredientListEntries.slice(0, ingredientQuantity);
  const isDone = sameSizeIngredientList.every((entry) => entry[1] === true);
  return isDone;
};

export default isRecipeDone;
