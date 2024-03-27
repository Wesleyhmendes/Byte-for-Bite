import { useReducer } from 'react';
import { FilterRadioType, SearchActionType } from '../type';

const useSearchBar = () => {
  const SET_SEARCH = 'SET_SEARCH';
  const CLEAN_SEARCH = 'CLEAN_SEARCH';
  const RESET = 'RESET';

  const initialFilter: FilterRadioType = {
    radioSelected: 'i',
    search: '',
    searchActive: false,
  };

  const searchReducer = (state = initialFilter, action: SearchActionType) => {
    switch (action.type) {
      case SET_SEARCH:
        return {
          ...state,
          [action.key as string]: action.value,
          searchActive: true,
        };
      case CLEAN_SEARCH:
        return {
          ...state,
          search: '',
        };
      case RESET:
        return initialFilter;
      default:
        return state;
    }
  };

  const [filter, filterDispatch] = useReducer(searchReducer, initialFilter);

  return {
    filter,
    filterDispatch,
  };
};

export default useSearchBar;
