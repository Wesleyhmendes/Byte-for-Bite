import { ChangeEvent } from 'react';
import { IngredientListType } from '../../type';

type RecipeIngredientsProps = {
  ingredients: string[];
  stateIngredients: IngredientListType;
  handleChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  recipeData: any;
};

function RecipeIngredients(
  { ingredients, stateIngredients, recipeData,handleChange }: RecipeIngredientsProps,
) {
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
      <div>
        <input
          type="checkbox"
          name={`strIngredient${index + 1}`}
          onChange={handleChange}
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
      </div>
      <hr />
      <p>{recipeData[`strMeasure${index + 1}`]}</p>
    </label>
  ));
}

export default RecipeIngredients;
