import { IDrinkID } from './drinks/IDrinkID';
import { IMealID } from './meals/IMealID';

export interface IFavorite {
  id: number,
  userId: number,
  favoriteRecipes: IMealID[] | IDrinkID[]
};