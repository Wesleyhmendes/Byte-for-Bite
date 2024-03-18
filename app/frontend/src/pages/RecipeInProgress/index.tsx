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

import Loading from '../../components/Loading/Loading';

import * as S from './RecipeInProgress.styles';
import Footer from '../../components/Footer';


export default function RecipeInProgress() {
  const navigate = useNavigate();
  const { route } = useContext(Context);
  const { profile } = useContext(UserInfoContext);
  const [finishing, setFinishing] = useState(false);
  const { id } = useParams();
  const userId = profile?.data?.id;

  // HOOK THAT CONTROLS STATE OF INGREDIENT CHECKBOX AND USES FETCHED DATA FROM DB AS INITIAL STATE
  const {
    stateIngredients,
    isInprogress,
    CHANGE,
    checkIngredientsDispatch,
  } = useCheckIngredients(userId, id as string, route);

  const recipeURL = `http://localhost:3001${route}/${id}`;
  const { data, error } = useFetch(recipeURL);

  const addDoneRecipeURL = `http://localhost:3001${route}/donerecipes/${id}`;
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

  return (
    <>
      <S.Main>
        {error ? <h3>An unexpected error occurred...</h3> : null}

        {recipeData && !isInprogress ? (
          <h3>This recipe has not been started.</h3>
        ) : null}

        {recipeData && isInprogress ? (
          <section className="recipesIngProgressSection">
            <RecipeInfo
              id={id as string}
              recipeData={recipeData}
              recipeType={recipeType}
            />

            <S.IngredientsDiv>
              <RecipeIngredients
                ingredients={ingredients}
                handleChange={handleChange}
                stateIngredients={stateIngredients}
              />
            </S.IngredientsDiv>

            <S.Instructions data-testid="instructions">
              {recipeData.strInstructions}
            </S.Instructions>

            <S.FinishRecipe isDone={isDone}>
              <button
                data-testid="finish-recipe-btn"
                disabled={!isDone}
                onClick={handleDone}
              >
                End Recipe
              </button>
            </S.FinishRecipe>
          </section>
        ) : null}

        {recipeData.strYoutube ? <RecipeVideo recipeData={recipeData} /> : null}

        {finishing ? <Loading /> : null}

      </S.Main>
      <Footer />
    </>
  );
}
