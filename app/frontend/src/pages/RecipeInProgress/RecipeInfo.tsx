import * as S from './RecipeInProgress.styles';
import {
  Gradient,
  TitleAndButtonContainer,
} from '../RecipeDetails/RecipeDetails.styles';
import FavoriteButton from '../../components/ShareFavoriteButtons';
import getCategories from '../../utils/getCategories';

type RecipeInfoProps = {
  recipeType: string;
  recipeData: any;
  id: string;
};

function RecipeInfo({ recipeData, recipeType, id }: RecipeInfoProps) {
  const category = getCategories(recipeData.strCategory)
  console.log(recipeType)
  return (
    <S.RecipeInfo imgSrc={recipeData[`str${recipeType}Thumb`]}>
      <TitleAndButtonContainer>
        <div>
          <h2 data-testid="recipe-title">{recipeData[`str${recipeType}`]}</h2>
          <p data-testid="recipe-category">
            {`Category: ${
              recipeType === 'Drink' ? recipeData.strAlcoholic : category
            }`}
          </p>
        </div>
        <FavoriteButton id={id} recipeType={recipeType} />
      </TitleAndButtonContainer>
      <Gradient />
    </S.RecipeInfo>
  );
}

export default RecipeInfo;
