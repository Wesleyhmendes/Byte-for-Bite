/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import { MealInfoType, DrinkInfoType } from '../../type';
import * as S from './DoneOrFavoriteCard.styles';

type FavoriteCardProps = {
  recipe: MealInfoType | DrinkInfoType
  recipeType: string;
};

export default function DoneOrFavoriteCard({ recipe, recipeType }: FavoriteCardProps) {
  const mealRecipe = recipe as MealInfoType;
  const drinkRecipe = recipe as DrinkInfoType;

  const title = recipeType === 'meals' ? mealRecipe.strMeal : drinkRecipe.strDrink;
  const shorterTitle = title?.length > 15 ? `${title.slice(0, 15)}...` : title;
  console.log(shorterTitle);
  return (
    <S.DoneOrFavoriteCard>
      {recipeType === 'meals' ? (
        <Link to={ `/meals/${mealRecipe.idMeal}` }>
          <img width="150px" src={ mealRecipe.strMealThumb } alt={ mealRecipe.strMeal } />
          <div>
            <h2>{shorterTitle}</h2>
            <p>{mealRecipe.strArea}</p>
          </div>
        </Link>
      ) : null}
      {recipeType === 'drinks' ? (
        <Link to={ `/drinks/${drinkRecipe.idDrink}` }>
          <img src={ drinkRecipe.strDrinkThumb } alt={ drinkRecipe.strDrink } />
          <div>
            <h2>{shorterTitle}</h2>
            <p>{drinkRecipe.strAlcoholic}</p>
          </div>
        </Link>
      ) : null}
    </S.DoneOrFavoriteCard>
  );
}
