import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Context from '../../context/Context';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import useFetch from '../../hooks/useFetch';

import MealCard from '../../components/MealCard';
import DrinkCard from '../../components/DrinkCard';
import Loading from '../../components/Loading/Loading';
import Footer from '../../components/Footer';
import * as S from './RecipeDetails.styles';

import getProfileId from '../../utils/getProfileId';
import createTitle from '../../utils/createTitle';
import NotFound from '../NotFound/NotFound';

export default function RecipeDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loadingNextPage, setIsLoadingNextPage] = useState(false);

  const { route, checkInProgressRecipe, inProgress } = useContext(Context);
  const { handleFetch: inProgressFetch } = inProgress;
  const { profile } = useContext(UserInfoContext);
  const userId = getProfileId(profile);

  const recipeDetailsURL = `${route}/${id}`;
  const { data, isLoading, error } = useFetch(recipeDetailsURL);
  const recipe = data;

  const isInProgress = checkInProgressRecipe(Number(id));

  const buttonText = isInProgress ? 'Continue recipe' : 'Start recipe';

  const startInProgressURL = `${route}/inprogress`;
  const reqBody = route === '/meals'
    ? { userId, mealId: Number(id) }
    : { userId, drinkId: Number(id) };

  const { handleFetch } = useFetch(startInProgressURL, { method: 'POST', body: reqBody });

  // IF inProgress.data RETURNS WITH A MESSAGE, IT MEANS THAT THE RECIPE IS NOT IN PROGRESS
  // HAD TO PUT A TIMEOUT FUNCTION SO 'IN PROGRESS' COMPONENT HAS TIME TO LOAD DATA FROM DB.
  const handleInProgress = () => {
    if (!isInProgress) {
      handleFetch();
    }
    setIsLoadingNextPage(true);
    setTimeout(() => {
      inProgressFetch();
      navigate(`${route}/${id}/in-progress`);
    }, 2000);
  };

  document.title = createTitle(route, recipe);

  return (
    <S.Main>
      {recipe && !loadingNextPage && route === '/meals' ? (
        <MealCard
          recipeData={ recipe }
          handleInProgress={ handleInProgress }
          buttonText={ buttonText }
        />
      ) : null}

      {recipe && !loadingNextPage && route === '/drinks' ? (
        <DrinkCard
          recipeData={ recipe }
          handleInProgress={ handleInProgress }
          buttonText={ buttonText }
        />
      ) : null}

      {(error && !loadingNextPage) || userId === 0 ? (
        <NotFound />
      ) : null}

      {isLoading ? <h3>Loading...</h3> : null}

      {loadingNextPage ? <Loading /> : null}

      {!loadingNextPage ? <Footer /> : null}

    </S.Main>
  );
}
