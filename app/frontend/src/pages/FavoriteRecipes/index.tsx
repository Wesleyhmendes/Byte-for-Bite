import { useContext, useState } from 'react';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import useFetch from '../../hooks/useFetch';
import formatFavorites from '../../utils/formatFavorites';

import DoneOrFavoriteCard from '../../components/DoneOrFavoriteCard/DoneOrFavoriteCard';
import FilterButtons from '../../components/FilterButtons/FilterButtons';

import * as S from './Favorites.styles';
import Footer from '../../components/Footer';
import ShortHeader from '../../components/ShortHeader';
import getProfileId from '../../utils/getProfileId';
import DoneOrFavoriteMessage from '../../components/DoneOrFavoriteMessage';

export default function FavoriteRecipes() {
  const [filter, setFilter] = useState('all');
  const { profile } = useContext(UserInfoContext);
  const userId = getProfileId(profile);

  const favoriteMealsURL = `/meals/favorites/search?user=${userId}`;
  const favoriteDrinksURL = `/drinks/favorites/search?user=${userId}`;

  const favoriteMeals = useFetch(favoriteMealsURL);
  const favoriteDrinks = useFetch(favoriteDrinksURL);
  const formattedMeals = formatFavorites('/meals', favoriteMeals);
  const formattedDrinks = formatFavorites('/drinks', favoriteDrinks);

  document.title = 'Favorite Recipes | Byte for Bite';

  return (
    <>
      <ShortHeader />
      <S.Favorites>
        <FilterButtons setFilter={ setFilter } />
        <S.CardContainer>
          {formattedMeals && filter === 'all'
            ? formattedMeals.favoriteRecipes.map((recipe, i) => (
              <DoneOrFavoriteCard
                key={ `allMeals[${i}]` }
                recipe={ recipe }
                recipeType="meals"
              />
            ))
            : null}
          {formattedDrinks && filter === 'all'
            ? formattedDrinks.favoriteRecipes.map((recipe, i) => (
              <DoneOrFavoriteCard
                key={ `allDrinks[${i}]` }
                recipe={ recipe }
                recipeType="drinks"
              />
            ))
            : null}
          {formattedMeals && filter === 'meals'
            ? formattedMeals?.favoriteRecipes.map((recipe, i) => (
              <DoneOrFavoriteCard
                key={ `meals[${i}]` }
                recipe={ recipe }
                recipeType="meals"
              />
            ))
            : null}
          {formattedDrinks && filter === 'drinks'
            ? formattedDrinks.favoriteRecipes.map((recipe, i) => (
              <DoneOrFavoriteCard
                key={ `drinks[${i}]` }
                recipe={ recipe }
                recipeType="drinks"
              />
            ))
            : null}

          <DoneOrFavoriteMessage
            filter={ filter }
            doneOrFav="favorite"
            mealUserId={ formattedMeals?.userId }
            drinkUserId={ formattedDrinks?.userId }
          />
        </S.CardContainer>
        <Footer />
      </S.Favorites>
    </>
  );
}
