import { ChangeEvent, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import style from './style.module.css';
import { DrinkType, IngredientListType, MealType } from '../../type';
import { fetchRecipeById } from '../../services/fetchApi';
import { verifyLocalStorageKeys } from '../../utils/functions/localStorage';
import ShareFavoriteButtons from '../../components/ShareFavoriteButtons';
import { finishRecipe } from '../../utils/functions/finish';
import useFetch from '../../hooks/useFetch';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import Context from '../../context/Context';
import getIngredients from '../../utils/functions/getIngredients';
import useCheckIngredients from '../../hooks/useCheckIngredients';

export default function RecipeInProgress() {
  const navigate = useNavigate();
  const { route } = useContext(Context);
  const { profile } = useContext(UserInfoContext);
  const { id } = useParams();
  const userId = profile?.data?.id

  // GET UNMARKED INGREDIENT LIST OF RECIPE IN PROGRESS FROM DB
  const inProgressURL = `http://localhost:3001${route}/inprogress/${id}?user=${userId}`;
  const {data: inProgress} = useFetch(inProgressURL);
  
  // HOOK THAT CONTROLS STATE OF INGREDIENTS CHECKBOX AND USES DATA FROM DB AS INITIAL STATE
  const initialState = inProgress ? inProgress.markedIngredients : undefined;
  const {stateIngredients, checkIngredientsDispatch} = useCheckIngredients();  
  
  // GET RECIPE
  const recipeURL = `http://localhost:3001${route}/${id}`;
  const { data, isLoading, error } =useFetch(recipeURL);
  if (!data) {
    return undefined
  }
  const recipeData = data  
  const typeRecipe = route === '/meals' ? 'Meal' : 'Drink';  
  
  // SEPARATES INGREDIENT LIST FROM RECIPE DATA AND RETURN A ARRAY OF INGREDIENTS
  const ingredients = getIngredients(recipeData);  

  // HANDLECHANGE

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = target

    checkIngredientsDispatch({type: 'CHANGE', name, value: checked});
  }
  console.log(stateIngredients)
  
  return (
    <div>
      { isLoading ? (
        <h3>Carregando...</h3>
      ) : null }

      { error && !isLoading ? (
        <h3>Um erro inesperado ocorreu...</h3>
      ) : null }

      { recipeData && !inProgress && !isLoading ? (
        <h3>Essa receita ainda não foi iniciada.</h3>
      ) : null }

      { recipeData && inProgress && !isLoading ? (
        <section className="recipesIngProgressSection">
          <ShareFavoriteButtons
            id={ id }
            recipeType={ route.split('/')[1] }
            recipeData={ recipeData }
          />
          <button
            data-testid="finish-recipe-btn"
            disabled={ false }
            onClick={ () => {

              navigate('/done-recipes');
            } }
          >
            Finalizar
          </button>

          <img
            data-testid="recipe-photo"
            src={ recipeData[`str${typeRecipe}Thumb`] }
            alt={ recipeData[`str${typeRecipe}`] }
          />

          <h2 data-testid="recipe-title">{ recipeData[`str${typeRecipe}`] }</h2>

          <p data-testid="recipe-category">{ recipeData.strCategory }</p>

          {ingredients.map((ingredient, index) => (
            <label
              data-testid={ `${index}-ingredient-step` }
              key={ index }             
            >
              <input
                type="checkbox"
                name={`strIngredient${index + 1}`}                
                onChange={ handleChange }
                checked={ initialState[`strIngredient${index + 1}`] }
              />
              {ingredient}
            </label>
          ))}

          <p data-testid="instructions">{ recipeData.strInstructions }</p>

        </section>
      ) : null}
    </div>
  );
}
