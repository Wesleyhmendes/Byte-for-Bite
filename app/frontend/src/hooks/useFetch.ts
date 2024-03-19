import { useReducer, useEffect } from 'react';
import { FetchAction, FetchOptions } from '../type';

const useFetch = (URL: string, options: FetchOptions = { method: 'GET' }) => {
  // INITIAL STATE IS PREPARED TO ACCEPT ALL KINDS OF DATA
  const initialState = {
    data: undefined,
    isLoading: true,
    error: undefined,
  };

  // CASE FETCHED DATA HAS ARRIVED, SETS LOADING TO FALSE. CASE SOMETHING WRONG HAPPENS DURING FETCH, SETS LOADING TO FALSE AND DISPLAYS IT IN ERROR STATE
  const fetchReducer = (state = initialState, action: FetchAction) => {
    switch (action.type) {
      case 'loading':
        return {
          ...state,
          isLoading: true,
        };
      case 'error':
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      case 'fetched':
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        };
      case 'reset':
        return initialState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  // LOADS TOKEN FROM LOCALSTORAGE FOR AUTHENTICATION. SINCE "GET" METHOD DOESN'T ACCEPT BODY, SETS IT TO 'UNDEFINED' IF IT IS THE CASE.
  const handleFetch = async () => {
    const { method, body } = options;
    const token = JSON.parse(localStorage.getItem('token') as string);
    const request = {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    };

    // STARTS SETTING LOADING 'TRUE'
    dispatch({ type: 'loading' });

    // TRY / CATCH
    try {
      const response = await fetch(URL, request);

      // IF ALL GOES WELL, DISPATCHES 'FETCHED' ACTION AND DATA PAYLOAD
      const result = await response.json();
      dispatch({ type: 'fetched', payload: result });
    } catch (err: any) {
      // IF THERE'S AN ERROR, DISPATCHES 'ERROR' ACTION AND ERROR DATA PAYLOAD
      dispatch({ type: 'error', payload: err });
    }
  };

  // USEEFFECT HANDLING "GET" METHOD AUTOMATICALLY. ALL OTHER METHODS HAVE TO INVOKE HANDLEFETCH TO REFRESH DATA ON DB. CLEANUP SETS FETCHED DATA TO INITIALSTATE, PREVENTING UNDESIRED OUTCOMES.
  useEffect(() => {
    if (options.method === 'GET') {
      handleFetch();
    }
    return () => {
      dispatch({ type: 'reset' });
    };
  }, [URL]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
    handleFetch,
    dispatch,
  };
};

export default useFetch;
