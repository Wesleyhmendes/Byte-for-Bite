import { useReducer, useEffect, useCallback } from 'react';
import { FetchAction } from '../type';
import { useLocation } from 'react-router-dom';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface FetchOptions {
  method?: RequestMethod,
  body?: any;
}

const useFetch = (URL: string, options: FetchOptions = { method: 'GET' }) => {
  const path = useLocation().pathname
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
        console.log(action.payload)
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        }
      case 'reset':
        return initialState;
      default:
        return state;
    }
  }

  const [ state, dispatch ] = useReducer(fetchReducer, initialState);

  const handleFetch = async () => { 
    const { method, body } = options;

    const request = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    }
    
    dispatch({type: 'loading'});

    try {
      const response = await fetch(URL, request.method === 'GET' ? undefined : request);
      const result = await response.json();

      dispatch({ type: 'fetched', payload: result });
      // setTimeout(() => {
       
      // }, 1000); 

    } catch (err) {
      dispatch({ type: 'error', payload: err })
    }    
  }; 
   
  useEffect(() => {   
    // console.log('entrou')
    if (options.method === 'GET') {
      handleFetch();           
    }
    return () => {     
      dispatch({type: 'reset'})
    }
  }, [URL])

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
    handleFetch,
    dispatch,
  }
}

export default useFetch;