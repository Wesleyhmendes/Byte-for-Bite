import { useReducer, useEffect, useCallback } from 'react';

type FetchAction =
  | { type: 'loading' }
  | { type: 'error'; payload: any }
  | { type: 'fetched'; payload: any };

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface FetchOptions {
  method?: RequestMethod,
  body?: any;
}

const useFetch = (URL: string, options: FetchOptions = {}) => {
  const initialState = {
    data: undefined,
    isLoading: true,
    error: undefined,
  }

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
        }
      default:
        return state;
    }
  }

  const [ state, dispatch ] = useReducer(fetchReducer, initialState);

  const handleFetch = useCallback(async () => {
    const { method = 'GET', body } = options;

    const request = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    }
    
    dispatch({type: 'loading'});

    try {
      const response = await fetch(URL, request);
      const result = await response.json();

      dispatch({ type: 'fetched', payload: await result });
    } catch (err) {
      dispatch({ type: 'error', payload: err })
    }
  }, [URL]);

  useEffect(() => {
    handleFetch()
  }, [handleFetch]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
  }
}

export default useFetch;