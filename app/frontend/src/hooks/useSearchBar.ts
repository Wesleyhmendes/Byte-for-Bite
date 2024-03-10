import { useReducer } from 'react';
import { FilterRadioType, SearchActionType } from '../type';

const useSearchBar = () => {
  const SET_SEARCH = 'SET_SEARCH';
  const RESET_SEARCH = 'RESET_SEARCH';

  const initialFilter: FilterRadioType = {
    radioSelected: 'i',
    search: '',
  };

  const searchReducer = (state = initialFilter, action: SearchActionType) => {
    switch (action.type) {
      case SET_SEARCH:
        return {
          ...state,
          [action.key as string]: action.value,
        };
      case RESET_SEARCH:
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
