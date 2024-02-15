import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import DrinksContext from '../../context/DrinkContext/DrinksContext';
import MealsContext from '../../context/MealContext/MealsContext';

export default function Carousel() {
  const { drinksInitialData: drinksData } = useContext(DrinksContext);
  const { mealsInitialData: mealsData } = useContext(MealsContext);

  const location = useLocation().pathname;

  return (
    <section>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {(location.includes('meals') ? drinksData : mealsData).slice(0, 6)
            .map((recipe, index, array) => (
              index % 2 !== 0 && index > 0 && (
                <div
                  key={ index }
                  className={ index === 1 ? 'carousel-item active' : 'carousel-item' }
                >
                  <div data-testid={ `${index - 1}-recommendation-card` }>
                    <img
                      src={ array[index - 1][`str${location.includes('meals')
                        ? 'Drink'
                        : 'Meal'}Thumb`] }
                      alt=""
                    />
                    <h5
                      data-testid={ `${index - 1}-recommendation-title` }
                    >
                      {array[index - 1][`str${location.includes('meals')
                        ? 'Drink'
                        : 'Meal'}`]}
                    </h5>
                  </div>
                  <div data-testid={ `${index}-recommendation-card` }>
                    <img
                      src={ recipe[`str${location.includes('meals')
                        ? 'Drink'
                        : 'Meal'}Thumb`] }
                      alt=""
                    />
                    <h5
                      data-testid={ `${index}-recommendation-title` }
                    >
                      {recipe[`str${location.includes('meals')
                        ? 'Drink'
                        : 'Meal'}`]}
                    </h5>
                  </div>
                </div>
              )
            ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
