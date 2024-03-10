import {FavoriteMeals, FavoriteDrinks} from '../../type'

type FavoriteCardProps = {
  favoriteRecipe: FavoriteMeals | FavoriteDrinks
  recipeType: string;
}

export default function FavoriteCard({favoriteRecipe, recipeType}: FavoriteCardProps) {
  const favoriteMeals = favoriteRecipe as FavoriteMeals; 
  const favoriteDrinks = favoriteRecipe as FavoriteDrinks;
  return (
    <div>
      {recipeType === 'meals' ? (
        <>
          <img src={favoriteMeals.strMealThumb} alt={favoriteMeals.strMeal} />
          <p>{favoriteMeals.strMeal}</p>
          <p>{favoriteMeals.strArea}</p>
        </>
      ) : null}
      {recipeType === 'drinks' ? (
        <>
          <img src={favoriteDrinks.strDrinkThumb} alt={favoriteDrinks.strDrink} />
          <p>{favoriteDrinks.strDrink}</p>
          <p>{favoriteDrinks.strAlcoholic}</p>
        </>
      ) :null}

    </div>
  )
}

