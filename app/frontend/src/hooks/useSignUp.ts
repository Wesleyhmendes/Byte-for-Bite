import { ChangeEvent, useReducer } from 'react';

type UserAction = {
  type: string,
  key?: string,
  value?: string,
}

const useSignUp = () => {
  const UPDATE_USER = 'UPDATE_USER';
  const RESET_USER = 'RESET_USER';

  const initialState = {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',    
  }

  const signUpReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
      case UPDATE_USER:
        return {
          ...state,
          [action.key]: action.value,
        }
      case RESET_USER:
        return initialState
      default:
        return state
    }
  }

  const [user, dispatch] = useReducer(signUpReducer, initialState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    dispatch({ type: UPDATE_USER, key: name, value }); 
  } 

  return {
    user,
    RESET_USER,
    handleChange,
    dispatch,
  }
}

export default useSignUp;