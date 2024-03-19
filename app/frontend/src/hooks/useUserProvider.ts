import { FetchedData } from '../type';
import useFetch from './useFetch';
import useSignUp from './useSignUp';

const useUserProvider = () => {
  // USER HANDLERS
  const { user, UPDATE_USER, RESET_USER, signUpDispatch, handleChange } = useSignUp();

  // PROFILE URL AND USER EMAIL
  const email = JSON.parse(localStorage.getItem('user') as string);
  const url = `http://localhost:3001/profile?email=${email}`;

  // PROFILE DATA
  const profile: FetchedData = useFetch(url);
  
  return {
    user,
    UPDATE_USER,
    RESET_USER,
    signUpDispatch,
    handleChange,
    profile,
  };
};

export default useUserProvider;
