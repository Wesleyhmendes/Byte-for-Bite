import { createContext } from 'react';
import { UserInfoType } from '../../type';

type UserInfoContextType = {
  userInfo: {
    email: string;
    password: string;
  }
  updateUser: (newInfo: UserInfoType) => void;
};

const UserInfoContext = createContext({} as UserInfoContextType);

export default UserInfoContext;
