import { User } from '../../type';
import validateUser from '../../utils/validateUser';
import * as S from './SignUp.styles';

type SignUpFormProps = {
  user: User;
  handleChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

function SignUpForm({ user, handleChange, handleSubmit }: SignUpFormProps) {
  const { email, username, password, confirmPassword } = user;

  const validateRegexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateEmail = validateRegexEmail.test(email);

  const validateUserName = username ? username.length >= 3 : false;

  const validatePassword = password.length >= 6;
  const validateConfirm = confirmPassword ? confirmPassword
    .length > 0 && confirmPassword === password : null;

  const validateSubmit = validateUser(user);

  return (
    <S.Form onSubmit={ handleSubmit }>
      <S.Label>
        Email
        <S.Inputs
          className={ validateEmail ? 'valid' : 'invalid' }
          type="email"
          name="email"
          value={ email }
          onChange={ handleChange }
          placeholder="Ex.: email@email.com"
        />
      </S.Label>
      <S.Label>
        Username
        <S.Inputs
          className={ validateUserName ? 'valid' : 'invalid' }
          type="text"
          name="username"
          placeholder="At least 3 characters"
          value={ username }
          onChange={ handleChange }
        />
      </S.Label>
      <S.Label>
        Password
        <S.Inputs
          className={ validatePassword ? 'valid' : 'invalid' }
          name="password"
          type="password"
          placeholder="At least 6 characters"
          value={ password }
          onChange={ handleChange }
        />
      </S.Label>
      <S.Label>
        Confirm your password
        <S.Inputs
          className={ validateConfirm ? 'valid' : 'invalid' }
          name="confirmPassword"
          type="password"
          value={ confirmPassword }
          onChange={ handleChange }
        />
      </S.Label>
      <S.Button disabled={ validateSubmit }>Sign up</S.Button>
    </S.Form>
  );
}

export default SignUpForm;
