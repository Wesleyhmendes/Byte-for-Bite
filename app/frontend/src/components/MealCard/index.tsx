import { DrinkType, MealType } from '../../type';

type MealCardProps = {
  recipeData: MealType | DrinkType;
};

export default function MealCard({ recipeData }: MealCardProps) {
  return (
    <section>
      <img
        data-testid="recipe-photo"
        src={ recipeData.strMealThumb }
        alt="imagem da receita"
      />
      <h2 data-testid="recipe-title">{recipeData.strMeal}</h2>
      <h3 data-testid="recipe-category">{recipeData.strCategory}</h3>
      <ul>
        {Object.keys(recipeData)
          .filter((key) => key.includes('strIngredient'))
          .map((ingredient: string, index: number) => (
            recipeData[ingredient] !== null && recipeData[ingredient] !== ''
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
      <p data-testid="instructions">{recipeData.strInstructions}</p>
      <iframe
        data-testid="video"
        width="560"
        height="315"
        src={ `${recipeData.strYoutube}`.replace('watch?v=', '/embed/') }
        title="YouTube video player"
        allow="accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture;
        web-share"
        allowFullScreen
      />
    </section>
  );
}
