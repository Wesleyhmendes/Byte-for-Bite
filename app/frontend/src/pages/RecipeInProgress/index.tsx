/* eslint-disable max-len */
import { ChangeEvent, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import getIngredients from '../../utils/getIngredients';
import useCheckIngredients from '../../hooks/useCheckIngredients';
import isRecipeDone from '../../utils/isRecipeDone';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import Context from '../../context/Context';
import useFetch from '../../hooks/useFetch';

import ShareFavoriteButtons from '../../components/ShareFavoriteButtons';
import RecipeInfo from './RecipeInfo';
import RecipeIngredients from './RecipeIngredients';
import RecipeVideo from './RecipeVideo';

export default function RecipeInProgress() {
  const navigate = useNavigate();
  const { route } = useContext(Context);
  const { profile } = useContext(UserInfoContext);
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
  const { data, isLoading, error } = useFetch(recipeURL);

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
    navigate('/done-recipes');
  };

  return (
    <div>
      {isLoading ? <h3>Loading...</h3> : null}

      {error && !isLoading ? <h3>An unexpected error occurred...</h3> : null}

      {recipeData && !isInprogress && !isLoading ? (
        <h3>This recipe has not been started.</h3>
      ) : null}

      {recipeData && isInprogress && !isLoading ? (
        <section className="recipesIngProgressSection">

          <ShareFavoriteButtons id={ id } recipeType={ route } />

          <button
            data-testid="finish-recipe-btn"
            disabled={ !isDone }
            onClick={ handleDone }
          >
            End Recipe
          </button>

          <RecipeInfo recipeData={recipeData} recipeType={recipeType} />

          <RecipeIngredients
            ingredients={ ingredients }
            handleChange={ handleChange }
            stateIngredients={ stateIngredients }
          />

          <p data-testid="instructions">{ recipeData.strInstructions }</p>

          {recipeData.strYoutube ? (

            <RecipeVideo recipeData={ recipeData } />

          ) : null}

        </section>
      ) : null}
    </div>
  );
}
