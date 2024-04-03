/* eslint-disable react/jsx-max-depth */
import { useContext } from 'react';
import { DrinkType, MealType } from '../../type';
import * as S from './Card.styles';
import CardText from './CardText';
import orangeClock from '../../assets/Icons/orangeClock.png';
import Context from '../../context/Context';

type RecipesMiniCardProps = {
  recipe: MealType | DrinkType
  path: string,
  index: number,
};

function RecipesMiniCard({ recipe, path, index }: RecipesMiniCardProps) {
  const { checkInProgressRecipe } = useContext(Context);

  const id = path === '/meals' ? recipe.idMeal : recipe.idDrink;
  const thumbnail = path === '/meals' ? recipe.strMealThumb : recipe.strDrinkThumb;

  const isInProgress = checkInProgressRecipe(Number(id));

  return (
    <S.Div data-testid={ `${index}-recipe-card` }>
      <S.Img src={ thumbnail }>
        {isInProgress && <img src={ orangeClock } alt="orangeClock" />}
      </S.Img>
      <CardText
        recipe={ recipe }
        path={ path }
        index={ index }
        isInProgress={ isInProgress }
      />
    </S.Div>
  );
}

export default RecipesMiniCard;
