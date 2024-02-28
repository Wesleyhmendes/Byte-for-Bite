import { Link } from 'react-router-dom';
import { DrinkType, FetchedData, MealType } from '../../type';

type RecipesMiniCardProps = {
  recipeData: FetchedData
  path: string,  
}

function RecipesMiniCard ({ recipeData, path }: RecipesMiniCardProps) {
  
  return (
    // <Link to={`/meals/${meal.idMeal}`} key={meal.idMeal}>
    //   <div data-testid={`${index}-recipe-card`}>
    //     <p data-testid={`${index}-card-name`}>{meal.strMeal}</p>
    //     <img
    //       width="150"
    //       data-testid={`${index}-card-img`}
    //       src={meal.strMealThumb}
    //       alt={meal.strMeal}
    //     />
    //   </div>
    // </Link>
  );
}

export default RecipesMiniCard;