import { useState } from 'react';
import UserInfoContext from './UserInfoContext';
import { UserInfoType } from '../../type';
import useUserProvider from '../../hooks/useUserProvider';

type UserInfoProviderProps = {
  children: React.ReactNode;
};

export default function UserInfoProvider({ children }: UserInfoProviderProps) {
  const { 
    user,
    UPDATE_USER,
    RESET_USER,
    profile,    
    signUpDispatch, 
    handleChange 
  } = useUserProvider()

  const value = {   
    user, 
    UPDATE_USER,
    RESET_USER,
    profile,  
    signUpDispatch, 
    handleChange 
  };

  return (
    <UserInfoContext.Provider value={ value }>
      {children}
    </UserInfoContext.Provider>
  );
}
