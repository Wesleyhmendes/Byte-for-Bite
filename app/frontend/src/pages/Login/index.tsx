import { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserInfoType } from '../../type';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';

function Login() {
  const INITIAL_STATE: UserInfoType = {
    email: '',
    password: '',
  };

  const navigate = useNavigate();

  const { updateUser } = useContext(UserInfoContext);

  const [user, setUserInfo] = useState<UserInfoType>(INITIAL_STATE);
  const [isDisable, setIsDisable] = useState<boolean>(true);

  const validateFields = ({ email, password }: UserInfoType) => {
    const validateRegexEmail = /\S+@\S+\.\S+/;
    const isValid = validateRegexEmail.test(email) && password.length > 6;
    setIsDisable(!isValid);
  };

  const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    const updateUserInfo = { ...user, [name]: value };
    setUserInfo(updateUserInfo);
    validateFields(updateUserInfo);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateUser(user);
    localStorage.setItem('user', JSON.stringify({ email: user.email }));
    navigate('/meals');
  };

  return (
    <main>
      <h2>Login</h2>
      <form onSubmit={ handleSubmit }>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={ user.email }
          onChange={ handleChange }
          data-testid="email-input"
        />
        <input
          name="password"
          type="password"
          placeholder="Senha"
          value={ user.password }
          onChange={ handleChange }
          data-testid="password-input"
        />
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={ isDisable }
        >
          Entrar
        </button>
      </form>
    </main>
  );
}

export default Login;
