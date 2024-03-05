import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { isRecipeDone, isRecipeInProgress } from '../../utils/localStorageFinders';
import MealCard from '../../components/MealCard';
import DrinkCard from '../../components/DrinkCard';
import style from './style.module.css';
import ShareFavoriteButtons from '../../components/ShareFavoriteButtons';
import Carousel from '../../components/Carousel';
import Context from '../../context/Context';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import useFetch from '../../context/hooks/useFetch';

export default function RecipeDetails() {  
  const navigate = useNavigate();
  const { id } = useParams();

  const { getRecipeById, route, setSelectedId } = useContext(Context);
  const { profile } = useContext(UserInfoContext);
  
  // GET THE RECIPE DATA BY ID
  const recipe = getRecipeById();

  // CHECK IF THE RECIPE IS DONE OR INPROGRESS
  const isInProgress = isRecipeInProgress(route, id as string);
  const isDone = isRecipeDone(id as string);
  
  const buttonText = isInProgress ? 'Continue recipe' : 'Start recipe'; 

  // SEND REQUISITION TO BACKEND AND START THE RECIPE, CHANGING TO "IN PROGRESS"
  const URL = `http://localhost:3001${route}/inprogress`; 
  const reqBody =
    route === '/meals'
      ? { userId: profile?.data?.id, mealId: Number(id) }
      : { userId: profile?.data?.id, drinkId: Number(id) };

  const { handleFetch } = useFetch(URL, {method: "POST", body: reqBody });

  const handleClick = () => {
    handleFetch()   
    navigate(`${route}/${id}/in-progress`);
  }

  useEffect(() => {
    if (id) {
      setSelectedId(id);
    }
  }, [id])  
  
  return (
    <main>
      <ShareFavoriteButtons
        id={ id }
        recipeType={ route }
        recipeData={ recipe }
      />

      {recipe ? (
        route === '/meals'
          ? (<MealCard recipeData={ recipe } />)
          : (<DrinkCard recipeData={ recipe } />)
      ) : null }

      {/* <Carousel /> */}

      {!isDone ? (
        <button
          className={ style.btnStartRecipe }
          data-testid="start-recipe-btn"
          type="button"
          onClick={ handleClick }
        >
          {buttonText}
        </button>
      ) : null}
    </main>
  );
}
