import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import DrinksContext from '../../context/DrinkContext/DrinksContext';
import MealsContext from '../../context/MealContext/MealsContext';
import { CategoryType } from '../../type';

export default function Category() {
  const location = useLocation().pathname;

  const {
    getMealsByCategory,
    clearCategoriesMeal,
    mealsCategoriesData,
  } = useContext(MealsContext);

  const {
    getDrinksByCategory,
    clearCategoriesDrink,
    drinksCategoriesData,
  } = useContext(DrinksContext);

  return (
    <section>
      {location === '/meals' ? (mealsCategoriesData.slice(0, 5)
        .map(({ strCategory }: CategoryType) => (
          <button
            onClick={ () => getMealsByCategory(strCategory) }
            data-testid={ `${strCategory}-category-filter` }
            key={ strCategory }
          >
            { strCategory }
          </button>
        ))) : (drinksCategoriesData.slice(0, 5)
        .map(({ strCategory }: CategoryType) => (
          <button
            onClick={ () => getDrinksByCategory(strCategory) }
            data-testid={ `${strCategory}-category-filter` }
            key={ strCategory }
          >
            { strCategory }
          </button>
        )))}
      <button
        onClick={ location === '/meals' ? clearCategoriesMeal : clearCategoriesDrink }
        data-testid="All-category-filter"
      >
        All
      </button>
    </section>
  );
}
