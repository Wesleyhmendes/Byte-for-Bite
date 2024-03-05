import { ChangeEvent, useContext, useState } from 'react';
import { User, UserInfoType } from '../../type';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import LoginModal from '../../components/Modals/LoginModal';
import Loading from '../../components/Loading/Loading';
import useUserProvider from '../../hooks/useUserProvider';


function Login() {  
  const { user, RESET_USER, handleChange, signUpDispatch } = useContext(UserInfoContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const url = 'http://localhost:3001/user/login';
  const requestBody = user;
  const { handleFetch, data, isLoading } = useFetch(url, {
    method: 'POST',
    body: requestBody,
  });

  const validateFields = (user: User) => {
    const { email, password } = user;
    const validateRegexEmail = /\S+@\S+\.\S+/;
    const isValid = validateRegexEmail.test(email) && password.length >= 6;
    return isValid;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleFetch();
    setIsModalOpen(true);
    localStorage.setItem('user', JSON.stringify(user.email));
    signUpDispatch({type: RESET_USER})
  };

  const isDisabled = validateFields(user);

  return (
    <main>
      {!isModalOpen ? (

        <>
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
              disabled={ !isDisabled }
            >
              Entrar
            </button>            
          </form>
          <div>
            <p>Don't have an account?</p>
            <p>Sign up <Link to='/signup'>here</Link></p>
          </div>
        </>  

      ) : null }

      { isLoading && isModalOpen ? (

        <Loading />

      ) : null}
      
      { isModalOpen && !isLoading ? (

        <LoginModal setIsModalOpen={ setIsModalOpen } token={ data.token } message={ data.message }/>

      ) : null }
    </main>
  );
}

export default Login;
