import { DrinkType, MealType } from '../../type';
import getIngredients from '../../utils/getIngredients';
import ShareFavoriteButtons from '../ShareFavoriteButtons';
import * as S from '../../pages/RecipeDetails/RecipeDetails.styles';

type DrinkCardProps = {
  recipeData: DrinkType | MealType;
  handleInProgress: () => void;
  buttonText: 'Start recipe' | 'Continue recipe';
};

export default function DrinkCard({ recipeData, handleInProgress, buttonText }: DrinkCardProps) {
  const { strDrink, strDrinkThumb, strAlcoholic, idDrink } = recipeData;
  const drinkIngredients = getIngredients(recipeData);
  return (
    <S.RecipeCard>
      <S.RecipeImage data-testid="recipe-photo" src={ strDrinkThumb } alt={ strDrink } />
      <S.TitleAndButtonContainer>
        <div>
          <h2 data-testid="recipe-title">{strDrink}</h2>
          <h3 data-testid="recipe-category">{strAlcoholic}</h3>
        </div>

        <ShareFavoriteButtons id={ idDrink } recipeType="/drinks" />
      </S.TitleAndButtonContainer>
      <S.IngredientsContainer>
        {drinkIngredients.map((ingredient, index) => (
          <li key={ index }>
            <p data-testid={ `${index}-ingredient-name-and-measure` }>
              {ingredient}
            </p>
            <hr />
            <p data-testid={ `${index}-ingredient-name-and-measure` }>
              {`${recipeData[`strMeasure${index + 1}`]}`}
            </p>
          </li>
        ))}
      </S.IngredientsContainer>

      <S.Button
        data-testid="start-recipe-btn"
        type="button"
        onClick={ handleInProgress }
      >
        {buttonText}
      </S.Button>
    </S.RecipeCard>
  );
}
