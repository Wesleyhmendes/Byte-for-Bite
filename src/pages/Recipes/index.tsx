import { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import MealsContext from '../../context/MealContext/MealsContext';
import DrinksContext from '../../context/DrinkContext/DrinksContext';
import Category from '../../components/Category';

export default function Recipes() {
  const { drinksData } = useContext(DrinksContext);
  const { mealsData } = useContext(MealsContext);

  const location = useLocation().pathname;

  return (
    <main>
      <Category />
      { location === '/meals' ? (
        mealsData?.slice(0, 12).map((meal, index) => (
          <Link to={ `/meals/${meal.idMeal}` } key={ meal.idMeal }>
            <div data-testid={ `${index}-recipe-card` }>
              <p data-testid={ `${index}-card-name` }>{ meal.strMeal }</p>
              <img
                width="150"
                data-testid={ `${index}-card-img` }
                src={ meal.strMealThumb }
                alt={ meal.strMeal }
              />
            </div>
          </Link>
        ))
      ) : (
        drinksData?.slice(0, 12).map((drink, index) => (
          <Link to={ `/drinks/${drink.idDrink}` } key={ drink.idDrink }>
            <div data-testid={ `${index}-recipe-card` }>
              <p data-testid={ `${index}-card-name` }>{ drink.strDrink }</p>
              <img
                width="150"
                data-testid={ `${index}-card-img` }
                src={ drink.strDrinkThumb }
                alt={ drink.strDrink }
              />
            </div>
          </Link>
        ))
      ) }
    </main>
  );
}
