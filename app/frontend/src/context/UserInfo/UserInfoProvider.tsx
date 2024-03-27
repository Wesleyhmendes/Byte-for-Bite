import UserInfoContext from './UserInfoContext';
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
    handleChange,
    getProfile,
  } = useUserProvider();

  const value = {
    user,
    UPDATE_USER,
    RESET_USER,
    profile,
    signUpDispatch,
    handleChange,
    getProfile,
  };

  return (
    <UserInfoContext.Provider value={ value }>
      {children}
    </UserInfoContext.Provider>
  );
}
