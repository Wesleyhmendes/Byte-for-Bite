/* eslint-disable react/jsx-max-depth */
import { DrinkType, MealType } from '../../type';
import {
  Div,
  ContentDiv,
  Img,
} from './Card.styles';
import CardText from './CardText';

type RecipesMiniCardProps = {
  recipe: MealType | DrinkType
  path: string,
  index: number,
};

function RecipesMiniCard({ recipe, path, index }: RecipesMiniCardProps) {
  const title = path === '/meals' ? recipe.strMeal : recipe.strDrink;
  const thumbnail = path === '/meals' ? recipe.strMealThumb : recipe.strDrinkThumb;
  return (
    <Div data-testid={ `${index}-recipe-card` }>
      <ContentDiv>
        <Img
          data-testid={ `${index}-card-img` }
          src={ thumbnail }
          alt={ title }
        />
        <CardText recipe={ recipe } path={ path } index={ index } />
      </ContentDiv>
    </Div>
  );
}

export default RecipesMiniCard;
