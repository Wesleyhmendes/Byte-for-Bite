/* eslint-disable react/jsx-max-depth */
import { Link } from 'react-router-dom';
import { DrinkType, MealType } from '../../type';
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
  recipe: MealType | DrinkType
  path: string,
  index: number,
};

function CardText({ recipe, path, index }: RecipesMiniCardProps) {
  const title = path === '/meals' ? recipe.strMeal : recipe.strDrink;
  const shorterTitle = title?.length > 20 ? `${title.slice(0, 20)}...` : title;
  const id = path === '/meals' ? recipe.idMeal : recipe.idDrink;
  const url = `${path}/${id}`;

  return (
    <TextContent>
      <NameFavorite>
        <RecipeInfo>
          <H1 data-testid={ `${index}-card-name` }>{ shorterTitle }</H1>
          <RecipeCategories>
            <PCategory>{ recipe.strCategory }</PCategory>
            { ' • ' }
            <PCategory>{ path === '/meals' ? recipe.strArea : recipe.strAlcoholic }</PCategory>
          </RecipeCategories>
        </RecipeInfo>
        <ShareFavoriteButtons id={ id } recipeType={ path } />
      </NameFavorite>
      <Link to={ url } key={ id }>
        <Details>Detalhes</Details>
      </Link>
    </TextContent>
  );
}

export default CardText;
