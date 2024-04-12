/* eslint-disable max-len */
import { ChangeEvent, useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import getIngredients from '../../utils/getIngredients';
import useCheckIngredients from '../../hooks/useCheckIngredients';
import isRecipeDone from '../../utils/isRecipeDone';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import Context from '../../context/Context';
import useFetch from '../../hooks/useFetch';

import RecipeInfo from './RecipeInfo';
import RecipeIngredients from './RecipeIngredients';
import RecipeVideo from './RecipeVideo';
import Footer from '../../components/Footer';
import NotFound from '../NotFound/NotFound';

import Loading from '../../components/Loading/Loading';

import * as S from './RecipeInProgress.styles';
import formatInstructions from '../../utils/formatInstructions';
import RecipeInstructions from './RecipeInstructions';
import getProfileId from '../../utils/getProfileId';

export default function RecipeInProgress() {
  const navigate = useNavigate();
  const { route } = useContext(Context);
  const { profile } = useContext(UserInfoContext);
  const [finishing, setFinishing] = useState(false);
  const { id } = useParams();
  const userId = getProfileId(profile);

  // HOOK THAT CONTROLS STATE OF INGREDIENT CHECKBOX AND USES FETCHED DATA FROM DB AS INITIAL STATE
  const {
    stateIngredients,
    isInprogress,
    CHANGE,
    checkIngredientsDispatch,
  } = useCheckIngredients(userId, id as string, route);

  const recipeURL = `${route}/${id}`;
  const { data, error } = useFetch(recipeURL);

  const addDoneRecipeURL = `${route}/donerecipes/${id}`;
  const {
    handleFetch,
  } = useFetch(addDoneRecipeURL, { method: 'POST', body: { userId } });

  if (!data) {
    return undefined;
  }
  const recipeData = data;
  const recipeType = route === '/meals' ? 'Meal' : 'Drink';

  // SEPARATES INGREDIENT LIST FROM RECIPE DATA AND RETURN A ARRAY OF INGREDIENTS
  const ingredients = getIngredients(recipeData);
  const formattedInstructions = formatInstructions(recipeData.strInstructions);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = target;
    checkIngredientsDispatch({ type: CHANGE, name, value: checked });
  };

  const isDone = isRecipeDone(ingredients, stateIngredients);

  const handleDone = () => {
    handleFetch();
    setFinishing(true);
    setTimeout(() => {
      navigate('/done-recipes');
    }, 2000);
  };

  document.title = route === '/meals'
    ? `Cooking ${recipeData[`str${recipeType}`]}` : `Mixing | ${recipeData[`str${recipeType}`]} Cocktail`;

  return (
    <>
      <S.Main>
        { error ? <NotFound /> : null }

        { recipeData && !isInprogress ? (
          <h3>This recipe has not been started.</h3>
        ) : null }

        { recipeData && isInprogress && !finishing ? (
          <S.RecipeSection>
            <RecipeInfo
              id={ id as string }
              recipeData={ recipeData }
              recipeType={ recipeType }
            />

            <S.IngredientsDiv>
              <RecipeIngredients
                ingredients={ ingredients }
                handleChange={ handleChange }
                stateIngredients={ stateIngredients }
                recipeData={ recipeData }
              />
            </S.IngredientsDiv>

            <S.Instructions>
              <RecipeInstructions instructions={ formattedInstructions } />
            </S.Instructions>
            <S.FinishRecipe>
              <button
                aria-label="finishRecipe-btn"
                disabled={ !isDone }
                onClick={ handleDone }
              >
                End Recipe
              </button>
            </S.FinishRecipe>
          </S.RecipeSection>
        ) : null }

        { recipeData.strYoutube && !finishing ? (
          <RecipeVideo recipeData={ recipeData } />
        ) : null }

        { finishing ? <Loading /> : null }
      </S.Main>
      { !finishing ? <Footer /> : null }

    </>
  );
}
