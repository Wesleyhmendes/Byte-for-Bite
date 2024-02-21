import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DoneRecipeType } from '../../type';
import shareIcon from '../../images/shareIcon.svg';

export default function DoneRecipes() {  
  const [filter, setFilter] = useState('all');
  const [shareMessage, setShareMessage] = useState<boolean>(false);

  const doneRecipes: DoneRecipeType[] = JSON.parse(localStorage.getItem('doneRecipes') ?? '[]');  

  const filteredRecipes = filter === 'all'
    ? doneRecipes
    : doneRecipes.filter((recipe) => recipe.type === filter);

  const copyText = async (recipe: DoneRecipeType) => {
    const recipeUrl = `${window.location.origin}/${recipe.type}s/${recipe.id}`;
    await navigator.clipboard.writeText(recipeUrl);
    setShareMessage(true);
  };

  return (
    <div>
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
      <ul>
        {filteredRecipes.map((recipe, index) => (
          <li key={ index }>
            <Link to={ `/${recipe.type}s/${recipe.id}` }>
              <img
                width="200px"
                src={ recipe.image }
                alt={ recipe.name }
                data-testid={ `${index}-horizontal-image` }
              />
              <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
            </Link>
            <p data-testid={ `${index}-horizontal-top-text` }>
              {recipe.type === 'meal'
                ? `${recipe.nationality} - ${recipe.category}`
                : recipe.alcoholicOrNot}
            </p>
            <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>
            <div>
              {recipe.tags.slice(0, 2).map((tag, tagIndex) => (
                <span key={ tagIndex } data-testid={ `${index}-${tag}-horizontal-tag` }>
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={ () => copyText(recipe) }
            >
              <img
                data-testid={ `${index}-horizontal-share-btn` }
                src={ shareIcon }
                alt="ícone do botão compartilhar"
              />
            </button>
            {shareMessage && <h4>Link copied!</h4>}
          </li>
        ))}
      </ul>
    </div>
  );
}
