import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Recipes from '../pages/Recipes';
import Layout from '../components/Layout';
import Profile from '../pages/Profile';
import DoneRecipes from '../pages/DoneRecipes';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import RecipeDetails from '../pages/RecipeDetails';
import RecipeInProgress from '../pages/RecipeInProgress';

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" Component={ Login } />
      <Route path="/meals/:id" Component={ RecipeDetails } />
      <Route path="/drinks/:id" Component={ RecipeDetails } />
      <Route path="/" Component={ Layout }>
        <Route path="meals" Component={ Recipes } />
        <Route path="drinks" Component={ Recipes } />
        <Route path="/meals/:id/in-progress" Component={ RecipeInProgress } />
        <Route path="/drinks/:id/in-progress" Component={ RecipeInProgress } />
        <Route path="profile" Component={ Profile } />
        <Route path="done-recipes" Component={ DoneRecipes } />
        <Route path="favorite-recipes" Component={ FavoriteRecipes } />
      </Route>
    </Routes>
  );
}
