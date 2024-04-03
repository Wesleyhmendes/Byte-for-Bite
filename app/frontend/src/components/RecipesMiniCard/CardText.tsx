/* eslint-disable react/jsx-max-depth */
import { Link } from 'react-router-dom';
import { DrinkType, MealType } from '../../type';
import clock from '../../assets/Icons/clock-icon.png';
import * as S from './Card.styles';
import ShareFavoriteButtons from '../ShareFavoriteButtons';

type RecipesMiniCardProps = {
  recipe: MealType | DrinkType;
  path: string;
  index: number;
  isInProgress: boolean;
};

function CardText({ recipe, path, index, isInProgress }: RecipesMiniCardProps) {
  const title = path === '/meals' ? recipe.strMeal : recipe.strDrink;
  const shorterTitle = title?.length > 20 ? `${title.slice(0, 20)}...` : title;
  const id = path === '/meals' ? recipe.idMeal : recipe.idDrink;
  const url = `${path}/${id}`;
  const inProgressURL = `${path}/${id}/in-progress`;
  const buttonTxt = isInProgress ? 'Continue' : 'Details';

  return (
    <S.CardTextContainer>
      <S.TitleAndButtonContainer>
        <div>
          <h1 data-testid={ `${index}-card-name` }>{ shorterTitle }</h1>
        </div>
        <ShareFavoriteButtons id={ id } recipeType={ path } />
        {/* <p>{isFav ? 'favorito' : 'não'}</p> */}
      </S.TitleAndButtonContainer>
      <S.RecipeCategories>
        <p>{ recipe.strCategory }</p>
        { ' • ' }
        <p>
          { path === '/meals' ? recipe.strArea : recipe.strAlcoholic }
        </p>
      </S.RecipeCategories>
      <Link to={ isInProgress ? inProgressURL : url } key={ id }>
        <S.DetailsButton
          className={ buttonTxt }
          data-testid="detailsBtn"
        >
          {buttonTxt}
          { buttonTxt === 'Continue' && (
            <img src={ clock } alt="clock" />
          )}
        </S.DetailsButton>
      </Link>
    </S.CardTextContainer>
  );
}

export default CardText;
