import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FavoriteRecipeType } from '../../type';

export default function FavoriteRecipes() {
  const [shareMessage, setShareMessage] = useState<boolean>(false);
  const [_favoriteRecipes, setFavoriteRecipes] = useState<FavoriteRecipeType[]>([]);
  const [filter, setFilter] = useState('all'); 

  const getLocalStorageData: FavoriteRecipeType[] = JSON.parse(
    localStorage.getItem('favoriteRecipes') ?? '[]');

  const filteredRecipes = filter === 'all'
    ? getLocalStorageData
    : getLocalStorageData.filter((recipe) => recipe.type === filter);

  const copyText = async (recipe: FavoriteRecipeType) => {
    const recipeUrl = `${window.location.origin}/${recipe.type}s/${recipe.id}`;
    await navigator.clipboard.writeText(recipeUrl);
    setShareMessage(true);
  }; 

  const handleRemoveFavorites = (recipeId: string) => {
    const updateFavorites = getLocalStorageData
      .filter((recipe: FavoriteRecipeType) => recipe.id !== recipeId);
    localStorage.setItem('favoriteRecipes', JSON.stringify(updateFavorites));
    setFavoriteRecipes(updateFavorites);
  };

  return (
    <section>
      <button
        onClick={ () => setFilter('all') }
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        onClick={ () => setFilter('meal') }
        data-testid="filter-by-meal-btn"
      >
        Meals
      </button>
      <button
        onClick={ () => setFilter('drink') }
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
      { filteredRecipes
        && filteredRecipes.map((recipe, index) => (
          <div key={ recipe.id }>
            <Link to={ `/${recipe.type}s/${recipe.id}` }>
              <img
                width="200"
                data-testid={ `${index}-horizontal-image` }
                src={ recipe.image }
                alt={ recipe.name }
              />
              <p data-testid={ `${index}-horizontal-name` }>{ recipe.name }</p>
            </Link>
            <button
              onClick={ () => copyText(recipe) }
            >
              <img
                data-testid={ `${index}-horizontal-share-btn` }
                src="src/images/shareIcon.svg"
                alt="compartilhar"
              />
            </button>
            <button
              onClick={ () => handleRemoveFavorites(recipe.id) }
            >
              <img
                data-testid={ `${index}-horizontal-favorite-btn` }
                src="src/images/blackHeartIcon.svg"
                alt="favoritar"
              />
            </button>
            <p data-testid={ `${index}-horizontal-top-text` }>{ recipe.category }</p>
            <p data-testid={ `${index}-horizontal-top-text` }>
              { `${recipe.nationality} - ${recipe.category}` }
            </p>
            { recipe.alcoholicOrNot ? (
              <p
                data-testid={ `${index}-horizontal-top-text` }
              >
                { recipe.alcoholicOrNot }
              </p>
            ) : null }
            { shareMessage && (
              <h4>Link copied!</h4>
            ) }
          </div>
        )) }
    </section>
  );
}
