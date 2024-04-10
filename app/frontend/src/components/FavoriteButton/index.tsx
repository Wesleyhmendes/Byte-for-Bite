/* eslint-disable max-len */
import { useContext } from 'react';
import fullHeart from '../../assets/Icons/favorite_full.png';
import emptyHeart from '../../assets/Icons/favorite_empty.png';
import useFetch from '../../hooks/useFetch';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import Context from '../../context/Context';
import { Button } from './Favorite.styles';
import getProfileId from '../../utils/getProfileId';

type FavoriteButtonProps = {
  id: string | undefined;
  recipeType: string;
};

export default function FavoriteButton({
  id, recipeType,
}: FavoriteButtonProps) {
  // GETS PROFILE FROM CONTEXT
  const { profile } = useContext(UserInfoContext);
  const { checkFavoriteRecipe, favorites } = useContext(Context);
  const { handleFetch: favFetch } = favorites;

  // SENDS INFORMATION TO DB THROUGH BODY VIA 'POST'
  const userId = getProfileId(profile);
  const addFavoriteURL = `${recipeType}/favorites/${id}`;
  const {
    handleFetch,
  } = useFetch(addFavoriteURL, { method: 'POST', body: { userId } });

  // CHECKS IF IT IS A FAVORITE RECIPE ON DB
  const isRecipeFavorite = checkFavoriteRecipe(Number(id));

  // SETS RECIPE FAVORITE ON DB VIA handleFetch() AND SYNCHRONIZES THE COMPONENT WITH favFetch();
  const favoriteRecipe = () => {
    handleFetch();
    setTimeout(() => {
      favFetch();
    }, 100);
  };

  return (
    <Button
      type="button"
      onClick={ favoriteRecipe }
    >
      <img
        data-testid="favorite-btn"
        src={ isRecipeFavorite ? fullHeart : emptyHeart }
        alt="Heart"
      />
    </Button>
  );
}
