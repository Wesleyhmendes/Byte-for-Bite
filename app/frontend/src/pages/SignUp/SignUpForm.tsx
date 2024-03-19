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

  const isInvalid = validateUser(user);
  return (
    <S.Form onSubmit={ handleSubmit }>
      <S.Label>
        Email
        <S.Inputs
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
          type="text"
          name="username"
          value={ username }
          onChange={ handleChange }
        />
      </S.Label>
      <S.Label>
        Password
        <S.Inputs
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
          name="confirmPassword"
          type="password"
          value={ confirmPassword }
          onChange={ handleChange }
        />
      </S.Label>
      <S.Button disabled={ isInvalid }>Sign up</S.Button>
    </S.Form>
  );
}

export default SignUpForm;
