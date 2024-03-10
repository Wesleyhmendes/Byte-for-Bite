import { Link } from 'react-router-dom';
import { DrinkType, MealType } from '../../type';

type RecipesMiniCardProps = {
  recipe: MealType | DrinkType
  path: string,
  index: number,
};

function RecipesMiniCard({ recipe, path, index }: RecipesMiniCardProps) {
  const id = path === '/meals' ? recipe.idMeal : recipe.idDrink;
  const url = `${path}/${id}`;
  const title = path === '/meals' ? recipe.strMeal : recipe.strDrink;
  const thumbnail = path === '/meals' ? recipe.strMealThumb : recipe.strDrinkThumb;
  return (
    <Link to={ url } key={ id }>
      <div data-testid={ `${index}-recipe-card` }>
        <p data-testid={ `${index}-card-name` }>{title}</p>
        <img
          width="150"
          data-testid={ `${index}-card-img` }
          src={ thumbnail }
          alt={ title }
        />
      </div>
    </Link>
  );
}

export default RecipesMiniCard;
