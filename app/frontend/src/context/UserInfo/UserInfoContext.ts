import { createContext } from 'react';
import { FetchedData, User, UserAction } from '../../type';

type UserInfoContextType = {  
  user : User; 
  UPDATE_USER: string;
  RESET_USER: string;
  profile: FetchedData;  
  signUpDispatch: React.Dispatch<UserAction>; 
  handleChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
};

const UserInfoContext = createContext({} as UserInfoContextType);

export default UserInfoContext;
