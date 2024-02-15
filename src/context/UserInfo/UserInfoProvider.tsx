import { useState } from 'react';
import UserInfoContext from './UserInfoContext';
import { UserInfoType } from '../../type';

type UserInfoProviderProps = {
  children: React.ReactNode;
};

export default function UserInfoProvider({ children }: UserInfoProviderProps) {
  const INITIAL_USER = {
    email: '',
    password: '',
  };

  const [userInfo, setUserInfo] = useState<UserInfoType>(INITIAL_USER);

  const updateUser = (newInfo: UserInfoType) => {
    setUserInfo({ ...userInfo, ...newInfo });
  };

  const value = {
    userInfo,
    updateUser,
  };

  return (
    <UserInfoContext.Provider value={ value }>
      {children}
    </UserInfoContext.Provider>
  );
}
