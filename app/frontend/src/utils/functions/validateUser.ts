import { User } from '../../type'

const validateUser = (user: User) => {
  const validateRegexEmail =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validEmail = validateRegexEmail.test(user.email);
  const validPassword = user.password.length >= 6;
  const matchedPasswords = user.password === user.confirmPassword;
  if (validEmail && validPassword && matchedPasswords && user.username) {
    return false;
  }

  return true;
}

export default validateUser;