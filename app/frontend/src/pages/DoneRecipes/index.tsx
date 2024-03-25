import { useContext, useState } from 'react';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import useFetch from '../../hooks/useFetch';
import formatDoneRecipes from '../../utils/formatDoneRecipes';

import DoneOrFavoriteCard from '../../components/DoneOrFavoriteCard/DoneOrFavoriteCard';
import FilterButtons from '../../components/FilterButtons/FilterButtons';

import * as S from './DoneRecipes.styles';
import Footer from '../../components/Footer';
import ShortHeader from '../../components/ShortHeader';

export default function DoneRecipes() {
  const [filter, setFilter] = useState('all');
  const { profile } = useContext(UserInfoContext);
  const userId = profile?.data?.id;

  const doneMealsURL = `http://localhost:3001/meals/donerecipes/search?user=${userId}`;
  const doneDrinksURL = `http://localhost:3001/drinks/donerecipes/search?user=${userId}`;

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

          {/* {!formattedDoneMeals?.userId
          && !formattedDoneDrinks?.userId
          && filter === 'all' ? (
            <p>You don't have any recipe done.</p>
            ) : null}
          {!formattedDoneMeals?.userId && filter === 'meals' ? (
            <p>You don't have any done meal.</p>
          ) : null}

          {!formattedDoneDrinks?.userId && filter === 'drinks' ? (
            <p>You don't have any done drink.</p>
          ) : null} */}
        </S.CardContainer>
        <Footer />
      </S.Done>
    </>
  );
}
