import { createContext } from 'react';
import { UserInfoType } from '../../type';

type UserInfoContextType = {
  userInfo: {
    username?: string,
    email: string;
    password: string;
    profileImage?: string | null;
  }
  updateUser: (newInfo: UserInfoType) => void;
};

const UserInfoContext = createContext({} as UserInfoContextType);

export default UserInfoContext;
