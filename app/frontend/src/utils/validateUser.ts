import { User } from '../type';

const validateUser = (user: User) => {
  const validateRegexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validEmail = validateRegexEmail.test(user.email);
  const validPassword = user.password.length >= 6;
  const matchedPasswords = user.password === user.confirmPassword;
  return !(validEmail && validPassword && matchedPasswords && user.username);
};

export default validateUser;
