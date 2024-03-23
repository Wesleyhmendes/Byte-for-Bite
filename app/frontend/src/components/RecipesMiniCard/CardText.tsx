/* eslint-disable react/jsx-max-depth */
import { Link } from 'react-router-dom';
import { DrinkType, MealType } from '../../type';
import clock from '../../assets/Icons/clock-icon.png';
import {
  TextContent,
  NameFavorite,
  RecipeCategories,
  RecipeInfo,
  PCategory,
  H1,
  Details,
} from './Card.styles';
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
    <TextContent>
      <NameFavorite>
        <RecipeInfo>
          <H1 data-testid={ `${index}-card-name` }>{ shorterTitle }</H1>
        </RecipeInfo>
        <ShareFavoriteButtons id={ id } recipeType={ path } />
      </NameFavorite>
      <RecipeCategories>
        <PCategory>{ recipe.strCategory }</PCategory>
        { ' • ' }
        <PCategory>
          { path === '/meals' ? recipe.strArea : recipe.strAlcoholic }
        </PCategory>
      </RecipeCategories>
      <Link to={ isInProgress ? inProgressURL : url } key={ id }>
        <Details className={ buttonTxt }>
          {buttonTxt}
          { buttonTxt === 'Continue' && (
            <img src={ clock } alt="clock" />
          )}
        </Details>
      </Link>
    </TextContent>
  );
}

export default CardText;
