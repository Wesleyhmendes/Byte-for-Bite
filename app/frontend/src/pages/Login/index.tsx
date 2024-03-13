/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from 'react';
import { User } from '../../type';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import useFetch from '../../hooks/useFetch';
import LoginModal from '../../components/Modals/LoginModal';
import logo from '../../assets/Images/BfB_Logo.png';
import * as Styled from './Login.styles';

function Login() {
  const { user, RESET_USER, handleChange, signUpDispatch } = useContext(UserInfoContext);
  const [isModalOpen, setIsModalOpen] = useState(false);  

  // GETS USER INITIAL STATE FROM CONTEXT, FILLS WITH INFORMATION FROM FORM BELLOW AND SENDS TO DB 
  const url = 'http://localhost:3001/user/login';

  const requestBody = user;

  const { handleFetch, data, isLoading } = useFetch(url, {
    method: 'POST',
    body: requestBody,
  });

  const validateFields = (userInfo: User) => {
    const { email, password } = userInfo;
    const validateRegexEmail = /\S+@\S+\.\S+/;
    const isValid = validateRegexEmail.test(email) && password.length >= 6;
    return isValid;
  };

  // SUBMITS DATA INVOKING handleFetch, SAVES USER E-MAIL IN LOCALSTORAGE FOR FURTHER USAGE, RESETS CONTEXT USER INFO AND SET MODAL OPEN FOR BACKEND AUTH.
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleFetch();
    setIsModalOpen(true);
    localStorage.setItem('user', JSON.stringify(user.email));
    signUpDispatch({ type: RESET_USER });
  };

  const isDisabled = validateFields(user);  

  return (    
    <Styled.Main>      
      <Styled.Section>
        <Styled.LogoDiv>
          <Styled.Logo src={ logo } alt="logo" />
        </Styled.LogoDiv>
        { !isModalOpen ? (
          <Styled.FormMainDiv>
            <Styled.Form onSubmit={ handleSubmit }>
              <Styled.Inputs
                name="email"
                type="email"
                placeholder="Email"
                value={ user.email }
                onChange={ handleChange }
                data-testid="email-input"
              />
              <Styled.Inputs
                name="password"
                type="password"
                placeholder="Senha"
                value={ user.password }
                onChange={ handleChange }
                data-testid="password-input"
              />
              <Styled.Button
                type="submit"
                data-testid="login-submit-btn"
                disabled={ !isDisabled }
              >
                Login
              </Styled.Button>
            </Styled.Form>
            <Styled.NoAccountDiv>
              <Styled.Phrase>
                Don't have an account?
                { ' ' }
              </Styled.Phrase>
              <Styled.Phrase>
                SignUp
                { ' ' }
                <Styled.PhraseLink to="/signup">here</Styled.PhraseLink>
              </Styled.Phrase>
            </Styled.NoAccountDiv>
          </Styled.FormMainDiv>

        ) : null }        

        { isModalOpen && !isLoading ? (

          <LoginModal
            setIsModalOpen={ setIsModalOpen }
            token={ data.token }
            message={ data.message }
          />

        ) : null }
      </Styled.Section>
    </Styled.Main>
  );
}

export default Login;
