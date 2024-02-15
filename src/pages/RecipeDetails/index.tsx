import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { DoneRecipeType, DrinkType, MealType } from '../../type';
import MealCard from '../../components/MealCard';
import DrinkCard from '../../components/DrinkCard';
import style from './style.module.css';
import { fetchRecipeById } from '../../services/fetchApi';
import { verifyLocalStorageKeys } from '../../utils/functions/localStorage';
import ShareFavoriteButtons from '../../components/ShareFavoriteButtons';
import Carousel from '../../components/Carousel';

export default function RecipeDetails() {
  const recipeType = useLocation().pathname.split('/')[1];
  const navigate = useNavigate();
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState<MealType | DrinkType | null>(null);
  const [showButtonStart, setShowButtonStart] = useState<boolean>(false);
  const [buttonType, setButtonType] = useState<string>('');

  useEffect(() => {
    const getDataById = async () => {
      if (id) {
        setRecipeData(await fetchRecipeById(recipeType, id));
      }
    };

    const addTypeButton = () => {
      const InProgress = JSON.parse(
        localStorage.getItem('inProgressRecipes') as string,
      );
      setButtonType(id && InProgress[recipeType][id]
        ? 'Continue Recipe' : 'Start Recipe');
      setShowButtonStart(!JSON.parse(localStorage.getItem('doneRecipes') as string)
        .some((recipe: DoneRecipeType) => recipe.id === id));
    };

    getDataById();
    verifyLocalStorageKeys('doneRecipes', 'inProgressRecipes');
    addTypeButton();
  }, [id]);

  return (
    <main>
      <ShareFavoriteButtons
        id={ id }
        recipeType={ recipeType }
        recipeData={ recipeData }
      />
      {recipeData !== null && (
        recipeType === 'meals'
          ? (<MealCard recipeData={ recipeData } />)
          : (<DrinkCard recipeData={ recipeData } />)
      )}
      <Carousel />
      {showButtonStart && (
        <button
          className={ style.btnStartRecipe }
          data-testid="start-recipe-btn"
          type="button"
          onClick={
            () => navigate(`/${recipeType}/${id}/in-progress`)
          }
        >
          {buttonType}
        </button>
      )}
    </main>
  );
}
