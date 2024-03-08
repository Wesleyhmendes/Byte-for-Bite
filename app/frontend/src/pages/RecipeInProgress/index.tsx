import { ChangeEvent, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IngredientListType } from '../../type';
import ShareFavoriteButtons from '../../components/ShareFavoriteButtons';
import useFetch from '../../hooks/useFetch';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import Context from '../../context/Context';
import getIngredients from '../../utils/getIngredients';
import useCheckIngredients from '../../hooks/useCheckIngredients';
import isRecipeDone from '../../utils/isRecipeDone';

export default function RecipeInProgress() {
  const navigate = useNavigate();
  const { route } = useContext(Context);
  const { profile } = useContext(UserInfoContext);
  const { id } = useParams();
  const userId = profile?.data?.id

  // HOOK THAT CONTROLS STATE OF INGREDIENT CHECKBOX AND USES FETCHED DATA FROM DB AS INITIAL STATE
  const {
    stateIngredients,
    isInprogress,    
    CHANGE,
    checkIngredientsDispatch,    
  } = useCheckIngredients(userId, id as string, route);
  
  // GET RECIPE
  const recipeURL = `http://localhost:3001${route}/${id}`;
  const { data, isLoading, error } =useFetch(recipeURL); 
  
  if (!data) {
    return undefined;
  }
  const recipeData = data 
  const typeRecipe = route === '/meals' ? 'Meal' : 'Drink';  
  
  // SEPARATES INGREDIENT LIST FROM RECIPE DATA AND RETURN A ARRAY OF INGREDIENTS
  const ingredients = getIngredients(recipeData);  

  // HANDLECHANGE
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = target;
    checkIngredientsDispatch({type: CHANGE, name, value: checked});    
  };

  // CHECK IF RECIPE IS DONE. IF IT IS, ENABLES 'End recipe' BUTTON.
  const isDone = isRecipeDone(ingredients, stateIngredients);

  return (
    <div>
      {isLoading ? <h3>Loading...</h3> : null}

      {error && !isLoading ? <h3>An unexpected error occurred...</h3> : null}

      {recipeData && !isInprogress && !isLoading ? (
        <h3>This recipe has not been started.</h3>
      ) : null}

      {recipeData && isInprogress && !isLoading ? (
        <section className="recipesIngProgressSection">
          <ShareFavoriteButtons
            id={id}
            recipeType={route.split('/')[1]}
            recipeData={recipeData}
          />
          <button
            data-testid="finish-recipe-btn"
            disabled={ !isDone }
            onClick={() => {
              navigate('/done-recipes');
            }}
          >
            End Recipe
          </button>

          <img
            data-testid="recipe-photo"
            src={recipeData[`str${typeRecipe}Thumb`]}
            alt={recipeData[`str${typeRecipe}`]}
          />

          <h2 data-testid="recipe-title">{recipeData[`str${typeRecipe}`]}</h2>

          <p data-testid="recipe-category">{recipeData.strCategory}</p>

          {ingredients.map((ingredient, index) => (
            <label 
              data-testid={`${index}-ingredient-step`} 
              key={index}
              style={
                stateIngredients[`strIngredient${index + 1}` as keyof IngredientListType] 
                ?
                { textDecoration: 'line-through' }
                :
                { textDecoration: 'none' } 
              }
            >
              <input
                type="checkbox"
                name={`strIngredient${index + 1}`}
                onChange={handleChange}
                checked={                 
                  stateIngredients[`strIngredient${index + 1}` as keyof IngredientListType] 
                  ?
                  stateIngredients[`strIngredient${index + 1}` as keyof IngredientListType] 
                  :
                  false
                }
              />
              {ingredient}
            </label>
          ))}

          <p data-testid="instructions">{recipeData.strInstructions}</p>
        </section>
      ) : null}
    </div>
  );
}
