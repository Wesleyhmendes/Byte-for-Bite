import { ChangeEvent, useReducer } from 'react';
import { UserAction } from '../type';

const useSignUp = () => {
  const UPDATE_USER = 'UPDATE_USER';
  const RESET_USER = 'RESET_USER';

  const initialState = {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    profileImage: '',
  };

  const signUpReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
      case UPDATE_USER:
        return {
          ...state,
          [action.key as string]: action.value,
        };
      case RESET_USER:
        return initialState;
      default:
        return state;
    }
  };

  const [user, signUpDispatch] = useReducer(signUpReducer, initialState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    signUpDispatch({ type: UPDATE_USER, key: name, value });
  };

  return {
    user,
    UPDATE_USER,
    RESET_USER,
    handleChange,
    signUpDispatch,
  };
};

export default useSignUp;
