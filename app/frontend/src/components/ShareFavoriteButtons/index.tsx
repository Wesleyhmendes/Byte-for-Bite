import { useEffect, useState } from 'react';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeart from '../../images/whiteHeartIcon.svg';
import blackHeart from '../../images/blackHeartIcon.svg';
import { addFavoriteRecipe, removeFavoriteRecipe } from '../../utils/favorite';
// import { verifyLocalStorageKeys } from '../../utils/functions/localStorage';
import { DrinkType, FavoriteRecipeType, MealType } from '../../type';

type ShareFavoriteButtonsProps = {
  id: string | undefined;
  recipeType: string;
  recipeData?: MealType | DrinkType | null
};

export default function ShareFavoriteButtons({
  id, recipeType, recipeData = null,
}: ShareFavoriteButtonsProps) {
  const [shareMessage, setShareMessage] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const isFavoriteRecipe = () => {
      setIsFavorite(JSON.parse(localStorage.getItem('favoriteRecipes') as string)
        .some((recipe: FavoriteRecipeType) => recipe.id === id));
    };
    // verifyLocalStorageKeys('favoriteRecipes');
    isFavoriteRecipe();
  }, [id]);

  const copyText = async () => {
    await navigator.clipboard.writeText(`${window.location.origin}/${recipeType}/${id}`);
    setShareMessage(true);
  };

  const favoriteRecipe = () => {
    setIsFavorite(!isFavorite);
    const storageData = JSON.parse(localStorage.getItem('favoriteRecipes') as string);
    if (isFavorite && id) removeFavoriteRecipe(id, storageData);
    else addFavoriteRecipe(storageData, recipeType, recipeData);
  };

  return (
    <>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ copyText }
      >
        <img src={ shareIcon } alt="ícone do botão compartilhar" />
      </button>

      <button
        type="button"
        onClick={ favoriteRecipe }
      >
        <img
          data-testid="favorite-btn"
          src={ isFavorite ? blackHeart : whiteHeart }
          alt="imagem de coração"
        />
      </button>

      {shareMessage && <h4>Link copied!</h4>}
    </>
  );
}
