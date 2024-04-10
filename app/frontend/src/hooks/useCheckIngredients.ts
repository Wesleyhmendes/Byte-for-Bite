/* eslint-disable max-len */
import { useEffect, useReducer } from 'react';
import { CheckIngredientActionType, FetchedData, IngredientListType } from '../type';
import useFetch from './useFetch';

const useCheckIngredients = (userId: number, recipeId: string, route: string) => {
  const CHANGE = 'CHANGE';
  const UPDATE = 'UPDATE';
  const defaultInitialState = {
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
  };

  // FETCHES (UN)MARKED INGREDIENT LIST FROM DB
  const inProgressURL = `${route}/inprogress/${recipeId}?user=${userId}`;
  const inProgress = useFetch(inProgressURL);

  // FUNCTION HANDLES FETCHED DATA AND RETURNS A COPY TO SERVE AS INITIAL STATE OF REDUCER
  const initialStateUpdater = (inProgressFromAPI: FetchedData): IngredientListType => {
    const { data } = inProgressFromAPI;

    const markedIngredientsCopy: IngredientListType = { ...data?.markedIngredients };
    return markedIngredientsCopy;
  };

  const initialState = initialStateUpdater(inProgress);

  // REDUCER CHANGES BOOLEAN DEPENDING ON PREVIOUS STATE USING ACTION.NAME AS REFERENCE
  const checkIngredientReducer = (state = initialState, action: CheckIngredientActionType) => {
    switch (action.type) {
      case CHANGE:
        return {
          ...state,
          [action.name as string]: !state[action.name as keyof IngredientListType],
        };
      case UPDATE:
        return initialState;
      default:
        return defaultInitialState;
    }
  };

  const [stateIngredients, checkIngredientsDispatch] = useReducer(checkIngredientReducer, initialState);

  // FUNCTION THAT CHECKS IF THE RECIPE IS IN PROGRESS
  const checkIfIsInProgress = (inProgressFromAPI: FetchedData) => {
    const { data, isLoading } = inProgressFromAPI;
    return !!(!isLoading && data);
  };

  const isInprogress = checkIfIsInProgress(inProgress);

  // USEFETCH SENDING DATA TO DB VIA 'PATCH' REQUISITION
  const updateMarkedIngredientsURL = `${route}/inprogress/${recipeId}?user=${userId}`;
  const { handleFetch } = useFetch(updateMarkedIngredientsURL, { method: 'PATCH', body: { markedIngredients: stateIngredients } });

  // USEEFFECT THAT SINCRONIZES THE HOOK'S INITIAL STATE WITH THE DATA FETCHED IN DB.
  // UNTIL DATA COMES FROM DB, THE OBJECT STARTS EMPTY. THAT'S WHY OBJECT.KEYS APPLIES HERE.
  useEffect(() => {
    if (Object.keys(initialState).length !== 0 && Object.keys(stateIngredients).length === 0) {
      checkIngredientsDispatch({ type: UPDATE });
    }
  }, [initialState]);

  // USEEFFECT THAT SENDS DATA TO DB IF stateIngredients CHANGES.
  useEffect(() => {
    if (Object.keys(stateIngredients).length !== 0) {
      handleFetch();
    }
  }, [stateIngredients]);

  return {
    initialState,
    isInprogress,
    stateIngredients,
    CHANGE,
    checkIngredientsDispatch,
    handleFetch,
  };
};

export default useCheckIngredients;
