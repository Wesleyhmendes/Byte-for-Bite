import validateLogin from '../../utils/validateLogin';
import { User } from '../../type';

import * as S from './Login.styles';
import DontHaveAccount from './DontHaveAccount';

type LoginFormProps = {
  user: User
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
};

function LoginForm({ user, handleChange, handleSubmit }: LoginFormProps) {
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
      </form>

      <DontHaveAccount />

    </S.FormMainDiv>
  );
}

export default LoginForm;
