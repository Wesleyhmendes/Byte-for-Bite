import { DrinkType, MealType } from '../../type';
import getIngredients from '../../utils/getIngredients';

type DrinkCardProps = {
  recipeData: DrinkType | MealType;
};

export default function DrinkCard({ recipeData }: DrinkCardProps) {
  const { strDrink, strDrinkThumb, strAlcoholic } = recipeData;
  const drinkIngredients = getIngredients(recipeData);
  return (
    <section>
      <img
        data-testid="recipe-photo"
        src={ strDrinkThumb }
        alt={ strDrink }
      />
      <h2 data-testid="recipe-title">{strDrink}</h2>
      <h3 data-testid="recipe-category">{strAlcoholic}</h3>
      <ul>
        {drinkIngredients.map((ingredient, index) => (
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
