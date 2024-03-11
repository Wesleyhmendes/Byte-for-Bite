import { DrinkType, MealType } from '../../type';

type DrinkCardProps = {
  recipeData: DrinkType | MealType;
};

export default function DrinkCard({ recipeData }: DrinkCardProps) {
  return (
    <section>
      <img
        data-testid="recipe-photo"
        src={ recipeData.strDrinkThumb }
        alt="imagem da receita"
      />
      <h2 data-testid="recipe-title">{recipeData.strDrink}</h2>
      <h3 data-testid="recipe-category">{recipeData.strAlcoholic}</h3>
      <ul>
        {Object.keys(recipeData)
          .filter((key) => key.includes('strIngredient'))
          .map((ingredient: string, index: number) => (
            recipeData[ingredient] !== null
            && recipeData[ingredient] !== ''
            && (
              <li key={ index }>
                <p data-testid={ `${index}-ingredient-name-and-measure` }>
                  {`${recipeData[ingredient]}`}
                </p>
                <p data-testid={ `${index}-ingredient-name-and-measure` }>
                  {`${recipeData[`strMeasure${Number(index) + 1}`]}`}
                </p>
              </li>
            )
          ))}
      </ul>      
    </section>
  );
}
