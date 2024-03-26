/* eslint-disable react/jsx-max-depth */
import { useContext } from 'react';
import { DrinkType, MealType } from '../../type';
import * as S from './Card.styles';
import CardText from './CardText';
import orangeClock from '../../assets/Icons/orangeClock.png';

import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import useFetch from '../../hooks/useFetch';
import checkInProgress from '../../utils/checkInProgress';

type RecipesMiniCardProps = {
  recipe: MealType | DrinkType
  path: string,
  index: number,
};

function RecipesMiniCard({ recipe, path, index }: RecipesMiniCardProps) {
  const { profile, getProfile } = useContext(UserInfoContext);
  const userProfile = getProfile(profile);
  const userId = userProfile.id;

  const id = path === '/meals' ? recipe.idMeal : recipe.idDrink;
  const thumbnail = path === '/meals' ? recipe.strMealThumb : recipe.strDrinkThumb;

  const inProgressURL = `http://localhost:3001${path}/inprogress/${id}?user=${userId}`;
  const inProgressData = useFetch(inProgressURL);

  const isInProgress = checkInProgress(inProgressData);
  return (
    <S.Div data-testid={ `${index}-recipe-card` }>
      <S.Img src={ thumbnail }>
        <img src={ isInProgress ? orangeClock : '' } alt="orangeClock" />
      </S.Img>
      <CardText
        recipe={ recipe }
        path={ path }
        index={ index }
        isInProgress={ isInProgress }
      />
    </S.Div>
  );
}

export default RecipesMiniCard;
