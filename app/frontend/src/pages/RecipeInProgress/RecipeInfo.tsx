import * as S from './RecipeInProgress.styles';
import {
  Gradient,
  TitleAndButtonContainer,
} from '../RecipeDetails/RecipeDetails.styles';
import FavoriteButton from '../../components/FavoriteButton';
import getRecipeCategory from '../../utils/getRecipeCategory';

type RecipeInfoProps = {
  recipeType: string;
  recipeData: any;
  id: string;
};

function RecipeInfo({ recipeData, recipeType, id }: RecipeInfoProps) {
  const recipeCategory = getRecipeCategory(recipeType, recipeData);
  return (
    <S.RecipeInfo imgsrc={ recipeData[`str${recipeType}Thumb`] }>
      <TitleAndButtonContainer>
        <div>
          <h2 data-testid="recipe-title">{recipeData[`str${recipeType}`]}</h2>
          <p data-testid="recipe-category">
            {`Category: ${recipeCategory}`}
          </p>
        </div>
        <FavoriteButton id={ id } recipeType={ recipeType } />
      </TitleAndButtonContainer>
      <Gradient />
    </S.RecipeInfo>
  );
}

export default RecipeInfo;
