/* eslint-disable max-len */
import validateLogin from '../../utils/validateLogin';
import { User, UserAction } from '../../type';

import * as S from './Login.styles';
import DontHaveAccount from './DontHaveAccount';
import GoogleAuth from '../SignUp/GoogleAuth';

type LoginFormProps = {
  user: User;
  handleChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  signUpDispatch: React.Dispatch<UserAction>;
};

function LoginForm({ user, handleChange, handleSubmit, signUpDispatch }: LoginFormProps) {
  const { email, password } = user;
  const isDisabled = validateLogin(user);
  return (
    <S.FormMainDiv>
      <form onSubmit={ handleSubmit }>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={ email }
          onChange={ handleChange }
          data-testid="email-input"
        />
        <input
          name="password"
          type="password"
          placeholder="Senha"
          value={ password }
          onChange={ handleChange }
          data-testid="password-input"
        />
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={ !isDisabled }
        >
          Login
        </button>
        <GoogleAuth signUpDispatch={ signUpDispatch } />
      </form>

      <DontHaveAccount />

    </S.FormMainDiv>
  );
}

export default LoginForm;
