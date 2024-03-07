import { useReducer } from 'react'
import { CheckIngredientActionType, FetchedData, IngredientListType } from '../type'
import useFetch from './useFetch';

const useCheckIngredients = (userId: number, recipeId: string, route: string) => {
  const CHANGE = 'CHANGE'; 

  // FETCHES (UN)MARKED INGREDIENT LIST FROM DB
  const inProgressURL = `http://localhost:3001${route}/inprogress/${recipeId}?user=${userId}`;
  const inProgress = useFetch(inProgressURL);

  // FUNCTION HANDLES FETCHED DATA AND RETURNS A COPY TO SERVE AS INITIAL STATE TO REDUCER
  const initialStateBuilder = (inProgressFromAPI: FetchedData): IngredientListType => {
    const { data } = inProgressFromAPI;    
    
    const markedIngredientsCopy: IngredientListType = {...data?.markedIngredients };
    return markedIngredientsCopy;
  };

  const initialState: IngredientListType = initialStateBuilder(inProgress);
  
  // REDUCER CHANGES BOOLEAN DEPENDING ON PREVIOUS STATE USING ACTION.NAME AS REFERENCE
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

  // FUNCTION THAT CHECKS IF THE RECIPE IS IN PROGRESS
  const checkIfIsInProgress = (inProgressFromAPI: FetchedData) => {
    const { data, isLoading } = inProgressFromAPI;
    if (!isLoading && data) {
      return true
    }
    return false
  }

  const isInprogress = checkIfIsInProgress(inProgress);

  // USEEFFECT THAT SAVES MARKED LIST ON DB IF 'STATEINGREDIENTS' CHANGES VIA 'PATCH' REQUISITION EVERY 2 SECONDS. UPDATING THE 'INITIALSTATE' CASE THE USER REFRESHES THE PAGE. 

  return {
    isInprogress,  
    stateIngredients,
    checkIngredientsDispatch,
  }
};

export default useCheckIngredients;
