import { ChangeEvent } from 'react';
import { IngredientListType } from '../../type';

type RecipeIngredientsProps = {
  ingredients: string[];
  stateIngredients: IngredientListType;
  handleChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
}

function RecipeIngredients({ingredients, stateIngredients, handleChange}: RecipeIngredientsProps) {
  return ingredients.map((ingredient, index) => (
    <label
      data-testid={`${index}-ingredient-step`}
      key={index}
      style={
        stateIngredients[
          `strIngredient${index + 1}` as keyof IngredientListType
        ]
          ? { textDecoration: 'line-through' }
          : { textDecoration: 'none' }
      }
    >
      <input
        type="checkbox"
        name={`strIngredient${index + 1}`}
        onChange={ handleChange }
        checked={
          stateIngredients[
            `strIngredient${index + 1}` as keyof IngredientListType
          ]
            ? stateIngredients[
                `strIngredient${index + 1}` as keyof IngredientListType
              ]
            : false
        }
      />
      {ingredient}
    </label>
  ));
};

export default RecipeIngredients