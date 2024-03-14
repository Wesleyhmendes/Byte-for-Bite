import { DrinkType, MealType } from '../../type';
import getIngredients from '../../utils/getIngredients';
import * as S from '../../pages/RecipeDetails/RecipeDetails.styles'
import ShareFavoriteButtons from '../ShareFavoriteButtons';

type MealCardProps = {
  recipeData: MealType | DrinkType;
  handleInProgress: () => void;
  buttonText: "Start recipe" | "Continue recipe";
};

export default function MealCard({ recipeData, handleInProgress, buttonText }: MealCardProps) {

  const { strMealThumb, strMeal, strCategory, idMeal } = recipeData  
  const mealIngredients = getIngredients(recipeData);

  return (
    <S.RecipeCard>
      <S.RecipeImage
        data-testid="recipe-photo"
        src={strMealThumb}
        alt={strMeal}
      />
      <S.TitleAndButtonContainer>
        <div>
          <h2 data-testid="recipe-title">{`Dish: ${strMeal}`}</h2>
          <h3 data-testid="recipe-category">{`Category: ${strCategory}`}</h3>
        </div>

        <ShareFavoriteButtons id={idMeal} recipeType="/meals" />
      </S.TitleAndButtonContainer>
      <S.IngredientsContainer>
        Ingredients:
        {mealIngredients.map((ingredient, index) => (
          <li key={index}>
            <p data-testid={`${index}-ingredient-name-and-measure`}>
              {ingredient}
            </p>
            <hr />
            <p data-testid={`${index}-ingredient-name-and-measure`}>
              {`${recipeData[`strMeasure${index + 1}`]}`}
            </p>
          </li>
        ))}
      </S.IngredientsContainer>

      <S.Button
        data-testid="start-recipe-btn"
        type="button"
        onClick={handleInProgress}
      >
        {buttonText}
      </S.Button>
    </S.RecipeCard>
  );
}
