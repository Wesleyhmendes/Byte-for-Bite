/* eslint-disable react/jsx-max-depth */
import { useContext } from 'react';
import { DrinkType, MealType } from '../../type';
import * as S from './Card.styles';
import CardText from './CardText';
import orangeClock from '../../assets/Icons/orangeClock.png';
import whiteClock from '../../assets/Icons/whiteClock.png'

import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import useFetch from '../../hooks/useFetch';

type RecipesMiniCardProps = {
  recipe: MealType | DrinkType
  path: string,
  index: number,
};

function RecipesMiniCard({ recipe, path, index }: RecipesMiniCardProps) {
  const { profile } = useContext(UserInfoContext);
  const userId = profile?.data?.id
  
  const id = path === '/meals' ? recipe.idMeal : recipe.idDrink;  
  const thumbnail = path === '/meals' ? recipe.strMealThumb : recipe.strDrinkThumb;

  const inProgressURL = `http://localhost:3001${path}/inprogress/${id}?user=${userId}`;
  const { data } = useFetch(inProgressURL);
  if (!data) {
    return undefined;
  }
  const isInProgress = data?.message ? false : true;  
  return (
    <S.Div data-testid={ `${index}-recipe-card` }>
      <S.Img src={thumbnail}>
        <img src={isInProgress ? orangeClock : ''} alt="" />
      </S.Img>      
      <CardText 
        recipe={ recipe } 
        path={ path } 
        index={ index }
        isInProgress={isInProgress} 
      />
    </S.Div>
  );
}

export default RecipesMiniCard;
