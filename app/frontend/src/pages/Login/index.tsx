import { useContext, useState } from 'react';
import { User } from '../../type';
import { Link } from 'react-router-dom';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import useFetch from '../../hooks/useFetch';
import LoginModal from '../../components/Modals/LoginModal';
import Loading from '../../components/Loading/Loading';
import bgImgMobile from '../../assets/Images/bgImgMobile.png';
import bgImgDesktop from '../../assets/Images/bgImgDesktop.png';
import logo from '../../assets/Images/BfB_Logo.png';
import {
  BackgroundImgMobile,
  BackgroundImgDesktop,
  Form,
  Inputs,
  Main,
  FormMainDiv,
  Phrase,
  Button,
  LogoDiv,
  Logo,
  NoAccountDiv,
} from './Login.styles';

function Login() {  
  const { user, RESET_USER, handleChange, signUpDispatch } = useContext(UserInfoContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // GETS USER OBJECT FROM CONTEXT AND FILLED WITH FORM INFORMATION BELLOW AND SENDS AS REQUEST BODY TO BACKEND
  const url = 'http://localhost:3001/user/login';
  const requestBody = user;

  const { handleFetch, data, isLoading } = useFetch(url, {
    method: 'POST',
    body: requestBody,
  });

  // VALIDATE SIGN UP INFORMATION BEFORE SENDING TO BACKEND
  const validateFields = (user: User) => {
    const { email, password } = user;
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
    signUpDispatch({type: RESET_USER})
  };

  const isDisabled = validateFields(user);

  return (
    <Main>
      <BackgroundImgDesktop src={ bgImgDesktop } alt="background" />
      <BackgroundImgMobile src={ bgImgMobile } alt="background" />
      <LogoDiv>
        <Logo src={ logo } alt="logo" />
      </LogoDiv>
      {!isModalOpen ? (
        <FormMainDiv>
          <Form onSubmit={ handleSubmit }>
            <Inputs
              name="email"
              type="email"
              placeholder="Email"
              value={ user.email }
              onChange={ handleChange }
              data-testid="email-input"
            />
            <Inputs
              name="password"
              type="password"
              placeholder="Senha"
              value={ user.password }
              onChange={ handleChange }
              data-testid="password-input"
            />
            <Button
              type="submit"
              data-testid="login-submit-btn"
              disabled={ !isDisabled }
            >
              Login
            </Button>
          </Form>
          <NoAccountDiv>
            <Phrase>
              Don't have an account? Sign up
              { ' ' }
              <Link to="/signup">here.</Link>
            </Phrase>
          </NoAccountDiv>
        </FormMainDiv>

      ) : null }

      { isLoading && isModalOpen ? (

        <Loading />

      ) : null}

      { isModalOpen && !isLoading ? (

        <LoginModal
          setIsModalOpen={ setIsModalOpen }
          token={ data.token }
          message={ data.message }
        />

      ) : null }
    </Main>
  );
}

export default Login;
