import { ChangeEvent, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import style from './style.module.css';
import { DrinkType, MealType } from '../../type';
import { fetchRecipeById } from '../../services/fetchApi';
import { verifyLocalStorageKeys } from '../../utils/functions/localStorage';
import ShareFavoriteButtons from '../../components/ShareFavoriteButtons';
import { finishRecipe } from '../../utils/functions/finish';
import useFetch from '../../hooks/useFetch';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import Context from '../../context/Context';
import getIngredients from '../../utils/functions/getIngredients';

export default function RecipeInProgress() {
  const navigate = useNavigate();
  const { route } = useContext(Context);
  const { profile } = useContext(UserInfoContext);
  const { id } = useParams();
  const userId = profile?.data?.id

  // GET UNMARKED INGREDIENT LIST OF RECIPE IN PROGRESS FROM DB
  const inProgressURL = `http://localhost:3001${route}/inprogress/${id}?user=${userId}`;
  const {data: inProgress} = useFetch(inProgressURL);
  console.log(inProgress)
  // GET RECIPE
  const recipeURL = `http://localhost:3001${route}/${id}`;
  const { data, isLoading, error } =useFetch(recipeURL);
  if (!data) {
    return undefined
  }
  const recipeData = data
  console.log(recipeData)
  const typeRecipe = route === '/meals' ? 'Meal' : 'Drink';  
  
  // SEPARATES INGREDIENT LIST FROM RECIPE DATA AND RETURN A ARRAY OF INGREDIENTS
  const ingredients = getIngredients(recipeData);
  // const [recipeData, setRecipeData] = useState<MealType | DrinkType>();
  // const [usedIngredients, setUsedIngredients] = useState<string[]>([]);
  // const [ingredients, setIngredients] = useState<string[]>([]);
  // const [isDisable, setIsDisable] = useState(true);  

  // useEffect(() => {
  //   const getData = async () => {
  //     if (id) {
  //       const data = (await fetchRecipeById(location.split('/')[1], id));
  //       setRecipeData(data);
  //       setIngredients((getIngredients(data)));
  //     }
  //   };

    // const getIngredients = (recipe: MealType | DrinkType) => {
    //   return Object.entries(recipe).filter((content: [string, unknown]) => content[0]
    //     .includes('strIngredient') && content[1]).flat()
    //     .filter((ingredient: any) => !(
    //       ingredient.includes('strIngredient'))) as string[];
    // };

  //   const checkInProgressRecipes = () => {
  //     const storeData = JSON.parse(localStorage.getItem('inProgressRecipes') as string);
  //     if (id && storeData[location.split('/')[1]][id]) {
  //       setUsedIngredients(storeData[location.split('/')[1]][id]);
  //     }
  //   };

  //   getData();
  //   verifyLocalStorageKeys('inProgressRecipes', 'favoriteRecipes');
  //   checkInProgressRecipes();
  // }, [id]);

  // const handleChange = ({
  //   target: { value } }: ChangeEvent<HTMLInputElement>) => {
  //   const storeData = JSON.parse(localStorage.getItem('inProgressRecipes') as string);
  //   if (id && !usedIngredients.includes(value)) {
  //     const newUsedIngredients = [...usedIngredients, value];
  //     setUsedIngredients(newUsedIngredients);
  //     storeData[location.split('/')[1]] = { [id]: newUsedIngredients };
  //     localStorage.setItem('inProgressRecipes', JSON.stringify(storeData));
  //     if (newUsedIngredients.length === ingredients.length) setIsDisable(false);
  //   } else {
  //     const removedIngredient = usedIngredients
  //       .filter((ingredient) => ingredient !== value);
  //     setUsedIngredients(removedIngredient);
  //     if (id) storeData[location.split('/')[1]] = { [id]: removedIngredient };
  //     localStorage.setItem('inProgressRecipes', JSON.stringify(storeData));
  //     setIsDisable(true);
  //   }
  // };
  

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
                value={ ingredient }
                // onChange={ handleChange }
                checked={ inProgress?.markedIngredients[`strIngredient${index + 1}`] }
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
