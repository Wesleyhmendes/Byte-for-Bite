import { useContext, useState } from 'react';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import useFetch from '../../hooks/useFetch';
import formatDoneRecipes from '../../utils/formatDoneRecipes';
import DoneOrFavoriteCard from '../../components/DoneOrFavoriteCard/DoneOrFavoriteCard';

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

  return (
    <div>
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
      {formattedDoneMeals && filter === 'all' ? (
        formattedDoneMeals.finishedRecipes
          .map((recipe, i) => (<DoneOrFavoriteCard
            key={ `AllDoneMeals[${i}]` }
            recipeType="meals"
            recipe={ recipe }
          />))
      ) : null}
      {formattedDoneDrinks && filter === 'all' ? (
        formattedDoneDrinks.finishedRecipes
          .map((recipe, i) => (<DoneOrFavoriteCard
            key={ `AllDoneDrinks[${i}]` }
            recipeType="drinks"
            recipe={ recipe }
          />))
      ) : null}

      {formattedDoneMeals && filter === 'meals' ? (
        formattedDoneMeals.finishedRecipes
          .map((recipe, i) => (<DoneOrFavoriteCard
            key={ `doneMeals[${i}]` }
            recipeType="meals"
            recipe={ recipe }
          />))
      ) : null}

      {formattedDoneDrinks && filter === 'drinks' ? (
        formattedDoneDrinks.finishedRecipes
          .map((recipe, i) => (<DoneOrFavoriteCard
            key={ `doneDrinks[${i}]` }
            recipeType="drinks"
            recipe={ recipe }
          />))
      ) : null}

    </div>
  );
}
