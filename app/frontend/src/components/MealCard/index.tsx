import { DrinkType, MealType } from '../../type';
import getIngredients from '../../utils/getIngredients';
import * as S from '../../pages/RecipeDetails/RecipeDetails.styles';
import FavoriteButton from '../ShareFavoriteButtons';

type MealCardProps = {
  recipeData: MealType | DrinkType;
  handleInProgress: () => void;
  buttonText: 'Start recipe' | 'Continue recipe';
};

export default function MealCard(
  { recipeData, handleInProgress, buttonText }: MealCardProps,
) {
  const { strMealThumb, strMeal, strCategory, idMeal } = recipeData;
  const mealIngredients = getIngredients(recipeData);

  return (
    <S.RecipeCard>
      <S.RecipeImageDiv imageurl={ strMealThumb }>
        <S.TitleAndButtonContainer>
          <div>
            <h2 data-testid="recipe-title">{ strMeal }</h2>
            <p data-testid="recipe-category">{ `Category: ${strCategory}` }</p>
          </div>

          <FavoriteButton id={ idMeal } recipeType="/meals" />
        </S.TitleAndButtonContainer>
        <S.Gradient />
      </S.RecipeImageDiv>
      <S.IngredientsContainer>
        Ingredients:
        { mealIngredients.map((ingredient, index) => (
          <li key={ index }>
            <p data-testid={ `${index}-ingredient-name-and-measure` }>
              { ingredient }
            </p>
            <hr />
            <p data-testid={ `${index}-ingredient-name-and-measure` }>
              { `${recipeData[`strMeasure${index + 1}`]}` }
            </p>
          </li>
        )) }
      </S.IngredientsContainer>

      <S.Button
        data-testid="start-recipe-btn"
        type="button"
        onClick={ handleInProgress }
      >
        { buttonText }
      </S.Button>
    </S.RecipeCard>
  );
}
