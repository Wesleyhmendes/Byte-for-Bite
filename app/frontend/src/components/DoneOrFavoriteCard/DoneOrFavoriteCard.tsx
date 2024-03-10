import { Link } from 'react-router-dom';
import { MealInfoType, DrinkInfoType } from '../../type';

type FavoriteCardProps = {
  recipe: MealInfoType | DrinkInfoType
  recipeType: string;
};

export default function DoneOrFavoriteCard({ recipe, recipeType }: FavoriteCardProps) {
  const mealRecipe = recipe as MealInfoType;
  const drinkRecipe = recipe as DrinkInfoType;
  return (
    <div>
      {recipeType === 'meals' ? (
        <Link to={ `/meals/${mealRecipe.idMeal}` }>
          <img width="150px" src={ mealRecipe.strMealThumb } alt={ mealRecipe.strMeal } />
          <p>{mealRecipe.strMeal}</p>
          <p>{mealRecipe.strArea}</p>
        </Link>
      ) : null}
      {recipeType === 'drinks' ? (
        <Link to={ `/drinks/${drinkRecipe.idDrink}` }>
          <img src={ drinkRecipe.strDrinkThumb } alt={ drinkRecipe.strDrink } />
          <p>{drinkRecipe.strDrink}</p>
          <p>{drinkRecipe.strAlcoholic}</p>
        </Link>
      ) : null}

    </div>
  );
}
