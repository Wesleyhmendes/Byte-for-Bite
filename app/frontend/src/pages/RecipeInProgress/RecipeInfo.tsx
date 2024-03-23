import * as S from './RecipeInProgress.styles';
import {
  Gradient,
  TitleAndButtonContainer,
} from '../RecipeDetails/RecipeDetails.styles';
import FavoriteButton from '../../components/ShareFavoriteButtons';

type RecipeInfoProps = {
  recipeType: string;
  recipeData: any;
  id: string;
};

function RecipeInfo({ recipeData, recipeType, id }: RecipeInfoProps) {  
  return (
    <S.RecipeInfo imgSrc={recipeData[`str${recipeType}Thumb`]}>
      <TitleAndButtonContainer>
        <div>
          <h2 data-testid="recipe-title">{recipeData[`str${recipeType}`]}</h2>
          <p data-testid="recipe-category">
            {`Category: ${
              recipeType === 'Drink' ? recipeData.strAlcoholic : recipeData.strCategory
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
