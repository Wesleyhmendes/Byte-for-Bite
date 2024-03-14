import { useContext, useState } from 'react';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import useFetch from '../../hooks/useFetch';
import formatFavorites from '../../utils/formatFavorites';

import DoneOrFavoriteCard from '../../components/DoneOrFavoriteCard/DoneOrFavoriteCard';
import FilterButtons from '../../components/FilterButtons/FilterButtons';


export default function FavoriteRecipes() {
  const [filter, setFilter] = useState('all');
  const { profile } = useContext(UserInfoContext);
  const userId = profile?.data?.id;

  const favoriteMealsURL = `http://localhost:3001/meals/favorites/search?user=${userId}`;
  const favoriteDrinksURL = `http://localhost:3001/drinks/favorites/search?user=${userId}`;

  const meals = useFetch(favoriteMealsURL);  
  const drinks = useFetch(favoriteDrinksURL);
  const formattedMeals = formatFavorites('/meals', meals);
  const formattedDrinks = formatFavorites('/drinks', drinks);

  return (
    <section>
  
      <FilterButtons setFilter={ setFilter } />
  
      {formattedMeals && filter === 'all'
        ? formattedMeals.favoriteRecipes.map((recipe, i) => (
            <DoneOrFavoriteCard
              key={`allMeals[${i}]`}
              recipe={recipe}
              recipeType="meals"
            />
          ))
        : null}
      {formattedDrinks && filter === 'all'
        ? formattedDrinks.favoriteRecipes.map((recipe, i) => (
            <DoneOrFavoriteCard
              key={`allDrinks[${i}]`}
              recipe={recipe}
              recipeType="drinks"
            />
          ))
        : null}
      {formattedMeals && filter === 'meals'
        ? formattedMeals?.favoriteRecipes.map((recipe, i) => (
            <DoneOrFavoriteCard
              key={`meals[${i}]`}
              recipe={recipe}
              recipeType="meals"
            />
          ))
        : null}
      {formattedDrinks && filter === 'drinks'
        ? formattedDrinks.favoriteRecipes.map((recipe, i) => (
            <DoneOrFavoriteCard
              key={`drinks[${i}]`}
              recipe={recipe}
              recipeType="drinks"
            />
          ))
        : null}
    </section>
  );
}
