import { useContext, useState } from 'react';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import useFetch from '../../hooks/useFetch';
import formatFavorites from '../../utils/formatFavorites';
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard';

export default function FavoriteRecipes() {  
  const [filter, setFilter] = useState('all');
  const { profile } = useContext(UserInfoContext);
  const userId = profile?.data?.id

  const favoriteMealsURL = `http://localhost:3001/meals/favorites/search?user=${userId}`
  const favoriteDrinksURL = `http://localhost:3001/drinks/favorites/search?user=${userId}`

  const meals = useFetch(favoriteMealsURL);
  const drinks = useFetch(favoriteDrinksURL);
  const formattedMeals = formatFavorites('/meals', meals);
  const formattedDrinks = formatFavorites('/drinks', drinks);

  return (
    <section>
      <button
        onClick={ () => setFilter('all') }
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        onClick={ () => setFilter('meal') }
        data-testid="filter-by-meal-btn"
      >
        Meals
      </button>
      <button
        onClick={ () => setFilter('drink') }
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>     
      {formattedMeals && filter === 'all' ? (
        formattedMeals.favoriteRecipes.map((recipe) => <FavoriteCard key='allMeals' favoriteRecipe={recipe} recipeType='meals' />)
      ) : null}
      {formattedDrinks && filter === 'all' ? (
        formattedDrinks.favoriteRecipes.map((recipe) => <FavoriteCard key='allDrinks' favoriteRecipe={recipe} recipeType='drinks' />)
      ) : null} 
      {formattedMeals && filter === 'meal' ? (
        formattedMeals?.favoriteRecipes.map((recipes) => <FavoriteCard key='meals' favoriteRecipe={recipes} recipeType='meals' />)
      ) : null}
      {formattedDrinks && filter === 'drink' ? (
        formattedDrinks.favoriteRecipes.map((recipes) => <FavoriteCard key='drinks' favoriteRecipe={recipes} recipeType='drinks' />)
      ) : null}
     
    </section>
  );
}
