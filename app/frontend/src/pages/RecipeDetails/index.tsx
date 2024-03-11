import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MealCard from '../../components/MealCard';
import DrinkCard from '../../components/DrinkCard';
import style from './style.module.css';
import ShareFavoriteButtons from '../../components/ShareFavoriteButtons';
import Carousel from '../../components/Carousel';
import Context from '../../context/Context';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import Footer from '../../components/Footer';

export default function RecipeDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loadingNextPage, setIsLoadingNextPage] = useState(false);

  const { route } = useContext(Context);
  const { profile } = useContext(UserInfoContext);
  const userId = profile?.data?.id;

  // GET THE RECIPE DATA BY ID
  const recipeDetailsURL = `http://localhost:3001${route}/${id}`;

  const { data, isLoading, error } = useFetch(recipeDetailsURL);
  const recipe = data;

  // CHECK IF THE RECIPE IS IN PROGRESS
  const inProgressURL = `http://localhost:3001${route}/inprogress/${id}?user=${userId}`;
  const inProgress = useFetch(inProgressURL);

  const buttonText = inProgress?.data ? 'Continue recipe' : 'Start recipe';

  // SEND REQUISITION TO BACKEND AND STARTS THE RECIPE, CHANGING IT TO "IN PROGRESS"
  const startInProgressURL = `http://localhost:3001${route}/inprogress`;
  const reqBody = route === '/meals'
    ? { userId: profile?.data?.id, mealId: Number(id) }
    : { userId: profile?.data?.id, drinkId: Number(id) };

  const { handleFetch } = useFetch(startInProgressURL, { method: 'POST', body: reqBody });

  // IF THE RECIPE HAS NEVER BEEN INITIATED, SENDS DATA VIA 'POST' REQUEST.
  // ELSE JUST NAVIGATE TO 'IN PROGRESS' PAGE. HAD TO PUT A TIMEOUT FUNCTION SO 'IN PROGRESS' COMPONENT HAS TIME TO LOAD DATA FROM DB.
  const handleClick = () => {
    if (!inProgress?.data) {
      handleFetch();
    }
    setIsLoadingNextPage(true);
    setTimeout(() => {
      navigate(`${route}/${id}/in-progress`);
    }, 2000);
  };

  return (
    <main>
      <ShareFavoriteButtons id={ id } recipeType={ route } />

      {recipe && !isLoading && !loadingNextPage ? (
        route === '/meals' ? (
          <MealCard recipeData={ recipe } />
        ) : (
          <DrinkCard recipeData={ recipe } />
        )
      ) : null}

      {error && !isLoading && !loadingNextPage ? (
        <h3>An unexpected error occurred...</h3>
      ) : null}

      {isLoading ? <h3>Loading...</h3> : null}

      {/* <Carousel /> */}
      {recipe && !isLoading && !loadingNextPage ? (
        <button
          className={ style.btnStartRecipe }
          data-testid="start-recipe-btn"
          type="button"
          onClick={ handleClick }
        >
          {buttonText}
        </button>
      ) : null}

      { loadingNextPage ? <Loading /> : null }
      <Footer />
    </main>
  );
}
