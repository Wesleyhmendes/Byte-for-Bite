/* eslint-disable max-len */
import { useContext } from 'react';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import useFetch from '../../hooks/useFetch';
import * as S from './Profile.styles';

function RecipesCounter() {
  const { profile } = useContext(UserInfoContext);
  const userId = profile?.data?.id;

  const favoriteMealsURL = `http://localhost:3001/meals/favorites/search?user=${userId}`;
  const favoriteDrinksURL = `http://localhost:3001/drinks/favorites/search?user=${userId}`;
  const doneMealsURL = `http://localhost:3001/meals/donerecipes/search?user=${userId}`;
  const doneDrinksURL = `http://localhost:3001/drinks/donerecipes/search?user=${userId}`;

  const favoriteMeals = useFetch(favoriteMealsURL);
  const favoriteDrinks = useFetch(favoriteDrinksURL);
  const doneMeals = useFetch(doneMealsURL);
  const doneDrinks = useFetch(doneDrinksURL);
  const favMeals: number = favoriteMeals.data?.message ? 0 : favoriteMeals.data?.length;
  const favDrinks: number = favoriteDrinks.data?.message ? 0 : favoriteDrinks.data?.length;
  const dMeals: number = doneMeals.data?.message ? 0 : doneMeals.data?.length;
  const dDrinks: number = doneDrinks.data?.message ? 0 : doneDrinks.data?.length;

  return (
    <S.CounterContainer>
      <div>
        <h2>{favDrinks + favMeals}</h2>
        <p>Favorites</p>
      </div>
      <hr />
      <div>
        <h2>{dMeals + dDrinks}</h2>
        <p>Done</p>
      </div>
    </S.CounterContainer>
  );
}

export default RecipesCounter;
