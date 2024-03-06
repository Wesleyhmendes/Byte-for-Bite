import { DrinkType, MealType } from '../../type';

const getIngredients = (recipe: MealType | DrinkType) => {
  return Object.entries(recipe).filter((content: [string, unknown]) => content[0]
    .includes('strIngredient') && content[1]).flat()
    .filter((ingredient: any) => !(
      ingredient.includes('strIngredient'))) as string[];
};

export default getIngredients;