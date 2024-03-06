import { useReducer } from 'react'
import { CheckIngredientActionType, IngredientListType } from '../type'

const useCheckIngredients = () => {
  const CHANGE = 'CHANGE'; 

  const initialState = {
    strIngredient1: false,
    strIngredient2: false,
    strIngredient3: false,
    strIngredient4: false,
    strIngredient5: false,
    strIngredient6: false,
    strIngredient7: false,
    strIngredient8: false,
    strIngredient9: false,
    strIngredient10: false,
    strIngredient11: false,
    strIngredient12: false,
    strIngredient13: false,
    strIngredient14: false,
    strIngredient15: false,
    strIngredient16: false,
    strIngredient17: false,
    strIngredient18: false,
    strIngredient19: false,
    strIngredient20: false,
  }

  const checkIngredientReducer = (state = initialState, action: CheckIngredientActionType) => {
    switch (action.type) {
      case CHANGE:
        return {
          ...state,
          [action.name as string] : !state[action.name as keyof IngredientListType]
        }
      default:
        return state;
    };
  };

  const [stateIngredients, checkIngredientsDispatch] = useReducer(checkIngredientReducer, initialState);

  return {    
    stateIngredients,
    checkIngredientsDispatch,
  }
};

export default useCheckIngredients;
