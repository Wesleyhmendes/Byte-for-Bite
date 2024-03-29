import { DrinkType, MealType } from '../type';

const getRecipeCategory = (recipeType: string, recipeData: MealType | DrinkType) => {
  if (recipeType === 'Drink') {
    return recipeData.strAlcoholic;
  }

  return recipeData.strCategory;
};

export default getRecipeCategory;
