import { IDrinkID } from './drinks/IDrinkID';
import { IMealID } from './meals/IMealID';

export interface IFinished {
  id: number,
  userId: number,
  finishedRecipes: IMealID[] | IDrinkID[]
};