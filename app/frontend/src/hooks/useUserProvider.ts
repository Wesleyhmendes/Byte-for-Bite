import { FetchedData, User } from '../type';
import useFetch from './useFetch';
import useSignUp from './useSignUp';

const useUserProvider = () => {
  // USER HANDLERS
  const { user, signUpDispatch, handleChange } = useSignUp();

  // PROFILE URL AND USER EMAIL
  const email = JSON.parse(localStorage.getItem('user') as string);
  const url = `/profile?email=${email}`;

  const getProfile = (fetchedData: FetchedData) => {
    const { data } = fetchedData;
    if (!data) {
      return {
        ...user,
        id: 0,
      };
    }
    return data as User;
  };

  // PROFILE DATA
  const profile: FetchedData = useFetch(url);

  return {
    user,
    signUpDispatch,
    handleChange,
    profile,
    getProfile,
  };
};

export default useUserProvider;
