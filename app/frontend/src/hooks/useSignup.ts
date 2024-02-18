import { useReducer } from 'react';

type UserAction = {
  type: string,
  key: string,
  value: string,
}

const useSignup = () => {
  const UPDATE_USER = 'UPDATE_USER'
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
      default:
        return state
    }
  }

  const [user, dispatch] = useReducer(signUpReducer, initialState);

  return {
    user,
    UPDATE_USER,
    dispatch
  }
}

export default useSignup;