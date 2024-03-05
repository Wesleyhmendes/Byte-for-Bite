import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { isRecipeDone, isRecipeInProgress } from '../../utils/localStorageFinders';
import MealCard from '../../components/MealCard';
import DrinkCard from '../../components/DrinkCard';
import style from './style.module.css';
import ShareFavoriteButtons from '../../components/ShareFavoriteButtons';
import Carousel from '../../components/Carousel';
import Context from '../../context/Context';

export default function RecipeDetails() {  
  const navigate = useNavigate();
  const { id } = useParams();

  const { getRecipeById, route, setSelectedId } = useContext(Context);
  const recipe = getRecipeById();

  const isInProgress = isRecipeInProgress(route, id as string);
  const isDone = isRecipeDone(id as string);
  
  const buttonText = isInProgress ? 'Continue recipe' : 'Start recipe';  

  const handleClick = () => {
    navigate(`${route}/${id}/in-progress`)
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

      <Carousel />

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
