/* eslint-disable max-len */
import { useEffect, useReducer } from 'react';
import { CheckIngredientActionType, FetchedData, IngredientListType } from '../type';
import useFetch from './useFetch';

const useCheckIngredients = (userId: number, recipeId: string, route: string) => {
  const CHANGE = 'CHANGE';
  const UPDATE = 'UPDATE';

  // FETCHES (UN)MARKED INGREDIENT LIST FROM DB
  const inProgressURL = `http://localhost:3001${route}/inprogress/${recipeId}?user=${userId}`;
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
        return state;
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
  const updateMarkedIngredientsURL = `http://localhost:3001${route}/inprogress/${recipeId}?user=${userId}`;
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
    isInprogress,
    stateIngredients,
    CHANGE,
    checkIngredientsDispatch,
    handleFetch,
  };
};

export default useCheckIngredients;
