import { useContext, useState } from 'react';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import useFetch from '../../hooks/useFetch';

export default function DoneRecipes() {  
  const [filter, setFilter] = useState('all');
  const { profile } = useContext(UserInfoContext);
  const userId = profile?.data?.id;

  const doneMealsURL = `http://localhost:3001/meals/donerecipes/search?user=${userId}`
  const doneDrinksURL = `http://localhost:3001/drinks/donerecipes/search?user=${userId}`

  const doneMeals = useFetch(doneMealsURL);
  const doneDrinks = useFetch(doneDrinksURL);

  console.log(doneMeals)

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
      
    </div>
  );
}
