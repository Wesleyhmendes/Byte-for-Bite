import { User } from '../type';

const validateLogin = (userInfo: User) => {
  const { email, password } = userInfo;
  const validateRegexEmail = /\S+@\S+\.\S+/;
  const isValid = validateRegexEmail.test(email) && password.length >= 6;
  return isValid;
};

export default validateLogin;