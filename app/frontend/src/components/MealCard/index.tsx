import { DrinkType, MealType } from '../../type';
import getIngredients from '../../utils/getIngredients';

type MealCardProps = {
  recipeData: MealType | DrinkType;
};

export default function MealCard({ recipeData }: MealCardProps) {
  const { strMealThumb, strMeal, strCategory } = recipeData  
  const mealIngredients = getIngredients(recipeData);
  return (
    <section>
      <img
        data-testid="recipe-photo"
        src={ strMealThumb }
        alt={ strMeal }
      />
      <h2 data-testid="recipe-title">{strMeal}</h2>
      <h3 data-testid="recipe-category">{strCategory}</h3>
      <ul>
        {mealIngredients.map((ingredient, index) => (          
          <li key={index}>
            <p data-testid={`${index}-ingredient-name-and-measure`}>
              {ingredient}
            </p>
            <p data-testid={`${index}-ingredient-name-and-measure`}>
              {`${recipeData[`strMeasure${index + 1}`]}`}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
