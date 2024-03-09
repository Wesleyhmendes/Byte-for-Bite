import { useContext, useEffect, useState } from 'react';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeart from '../../images/whiteHeartIcon.svg';
import blackHeart from '../../images/blackHeartIcon.svg';
import useFetch from '../../hooks/useFetch';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import checkFavoritesFromDB from '../../utils/checkFavoritesFromDB';
import Context from '../../context/Context';

type ShareFavoriteButtonsProps = {
  id: string | undefined;
  recipeType: string;  
};

export default function ShareFavoriteButtons({
  id, recipeType
}: ShareFavoriteButtonsProps) { 
  const [shareMessage, setShareMessage] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);  

  // GETS PROFILE FROM CONTEXT
  const { profile } = useContext(UserInfoContext);
  const { formattedFavorites } = useContext(Context)
  
  // SENDS INFORMATION TO DB THROUGH BODY VIA 'POST'
  const user = profile?.data;
  const addFavoriteURL = `http://localhost:3001${recipeType}/favorites/${id}`
  const { handleFetch } = useFetch(addFavoriteURL, {method: 'POST', body: {userId: user?.id}}); 
  
  // CHECKS IF IT IS A FAVORITE RECIPE ON DB
  const isRecipeFavorite = checkFavoritesFromDB(recipeType, id as string, formattedFavorites);  

  // COPY URL TO SHARE RECIPE
  const copyText = async () => {
    await navigator.clipboard.writeText(`${window.location.origin}/${recipeType}/${id}`);
    setShareMessage(true);
  };

   // SETS FAVORITE STATE AND SETS RECIPE AS FAVORITE ON DB VIA handleFetch()
   const favoriteRecipe = () => {
    setIsFavorite((prev) => !prev);
    handleFetch();    
  };

  // SYNCHRONIZES STATE WITH DB
  useEffect(() => {
    if (isRecipeFavorite) {
      setIsFavorite(isRecipeFavorite);
    }
  }, [isRecipeFavorite]);

  return (
    <>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ copyText }
      >
        <img src={ shareIcon } alt="Share button icon" />
      </button>

      <button
        type="button"
        onClick={ favoriteRecipe }
      >
        <img
          data-testid="favorite-btn"
          src={ isFavorite ? blackHeart : whiteHeart }
          alt="Heart image"
        />
      </button>

      {shareMessage ? <h4>Link copied!</h4> : null}
    </>
  );
}
