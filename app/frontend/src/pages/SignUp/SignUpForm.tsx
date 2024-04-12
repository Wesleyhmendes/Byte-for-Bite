/* eslint-disable max-len */
import { User, UserAction } from '../../type';
import validateUser from '../../utils/validateUser';
import GoogleAuth from '../../components/GoogleOAuth/GoogleAuth';
import * as S from './SignUp.styles';

type SignUpFormProps = {
  user: User;
  handleChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  signUpDispatch: React.Dispatch<UserAction>;
  setGoogleUser: React.Dispatch<React.SetStateAction<boolean>>;
};

function SignUpForm({ user, handleChange, handleSubmit, signUpDispatch, setGoogleUser }: SignUpFormProps) {
  const { email, username, password, confirmPassword } = user;

  const validateRegexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateEmail = validateRegexEmail.test(email);

  const validateUserName = username ? username.length >= 3 : false;

  const validatePassword = password.length >= 6;
  const validateConfirm = confirmPassword ? confirmPassword
    .length > 0 && confirmPassword === password : null;

  const isUserValid = validateUser(user);

  return (
    <S.Form onSubmit={ handleSubmit }>
      <label>
        Email
        <input
          className={ validateEmail ? 'valid' : 'invalid' }
          type="email"
          name="email"
          value={ email }
          onChange={ handleChange }
          placeholder="Ex.: email@email.com"
        />
      </label>
      <label>
        Username
        <input
          className={ validateUserName ? 'valid' : 'invalid' }
          type="text"
          name="username"
          placeholder="At least 3 characters"
          value={ username }
          onChange={ handleChange }
        />
      </label>
      <label>
        Password
        <input
          className={ validatePassword ? 'valid' : 'invalid' }
          name="password"
          type="password"
          placeholder="At least 6 characters"
          value={ password }
          onChange={ handleChange }
        />
      </label>
      <label className="confirm">
        Confirm your password
        <input
          className={ validateConfirm ? 'valid' : 'invalid' }
          name="confirmPassword"
          type="password"
          value={ confirmPassword }
          onChange={ handleChange }
        />
      </label>
      <GoogleAuth
        signUpDispatch={ signUpDispatch }
        setGoogleUser={ setGoogleUser }
      />
      <button disabled={ !isUserValid }>Sign up</button>
    </S.Form>
  );
}

export default SignUpForm;
