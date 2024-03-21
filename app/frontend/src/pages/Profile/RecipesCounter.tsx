/* eslint-disable max-len */
import { useContext } from 'react';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import useFetch from '../../hooks/useFetch';
import * as S from './Profile.styles';

function RecipesCounter() {
  const { profile } = useContext(UserInfoContext);
  const userId = profile?.data?.id;

  const profileRecipesURL = `http://localhost:3001/profile/${userId}/profileRecipes`;

  const { data } = useFetch(profileRecipesURL);
  if (!data) {
    return undefined;
  }

  const { favoritesCount, finishedCount, inProgressCount } = data;

  return (
    <S.CounterContainer>
      <div>
        <h2>{inProgressCount}</h2>
        <p>In progress</p>
      </div>
      <hr />
      <div>
        <h2>{favoritesCount}</h2>
        <p>Favorites</p>
      </div>
      <hr />
      <div>
        <h2>{finishedCount}</h2>
        <p>Finished</p>
      </div>
    </S.CounterContainer>
  );
}

export default RecipesCounter;
