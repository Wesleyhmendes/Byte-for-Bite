import { useContext, useState } from 'react';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import useFetch from '../../hooks/useFetch';
import formatDoneRecipes from '../../utils/formatDoneRecipes';

import DoneOrFavoriteCard from '../../components/DoneOrFavoriteCard/DoneOrFavoriteCard';
import FilterButtons from '../../components/FilterButtons/FilterButtons';

import * as S from './DoneRecipes.styles';
import Footer from '../../components/Footer';
import ShortHeader from '../../components/ShortHeader';
import getProfileId from '../../utils/getProfileId';
import DoneOrFavoriteMessage from '../../components/DoneOrFavoriteMessage';

export default function DoneRecipes() {
  const [filter, setFilter] = useState('all');
  const { profile } = useContext(UserInfoContext);
  const userId = getProfileId(profile);

  const doneMealsURL = `/meals/donerecipes/search?user=${userId}`;
  const doneDrinksURL = `/drinks/donerecipes/search?user=${userId}`;

  const doneMeals = useFetch(doneMealsURL);
  const doneDrinks = useFetch(doneDrinksURL);

  const formattedDoneMeals = formatDoneRecipes('/meals', doneMeals);
  const formattedDoneDrinks = formatDoneRecipes('/drinks', doneDrinks);

  document.title = 'Done Recipes | Byte for Bite';

  return (
    <>
      <ShortHeader />
      <S.Done>
        <FilterButtons setFilter={ setFilter } />
        <S.CardContainer>
          {formattedDoneMeals && filter === 'all'
            ? formattedDoneMeals.finishedRecipes.map((recipe, i) => (
              <DoneOrFavoriteCard
                key={ `AllDoneMeals[${i}]` }
                recipeType="meals"
                recipe={ recipe }
              />
            ))
            : null}

          {formattedDoneDrinks && filter === 'all'
            ? formattedDoneDrinks.finishedRecipes.map((recipe, i) => (
              <DoneOrFavoriteCard
                key={ `AllDoneDrinks[${i}]` }
                recipeType="drinks"
                recipe={ recipe }
              />
            ))
            : null}
          {formattedDoneMeals && filter === 'meals'
            ? formattedDoneMeals.finishedRecipes.map((recipe, i) => (
              <DoneOrFavoriteCard
                key={ `doneMeals[${i}]` }
                recipeType="meals"
                recipe={ recipe }
              />
            ))
            : null}
          {formattedDoneDrinks && filter === 'drinks'
            ? formattedDoneDrinks.finishedRecipes.map((recipe, i) => (
              <DoneOrFavoriteCard
                key={ `doneDrinks[${i}]` }
                recipeType="drinks"
                recipe={ recipe }
              />
            ))
            : null}

          <DoneOrFavoriteMessage
            filter={ filter }
            doneOrFav="done"
            mealUserId={ formattedDoneMeals?.userId }
            drinkUserId={ formattedDoneDrinks?.userId }
          />
        </S.CardContainer>
        <Footer />
      </S.Done>
    </>
  );
}
