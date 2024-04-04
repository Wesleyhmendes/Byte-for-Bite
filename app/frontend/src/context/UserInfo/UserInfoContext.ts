import { createContext } from 'react';
import { FetchedData, User, UserAction } from '../../type';

type UserInfoContextType = {
  user : User;
  profile: FetchedData;
  signUpDispatch: React.Dispatch<UserAction>;
  handleChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  getProfile: (fetchedData: FetchedData) => User
};

const UserInfoContext = createContext({} as UserInfoContextType);

export default UserInfoContext;
