/* eslint-disable react/no-unescaped-entities */
import { ChangeEvent, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserInfoType } from '../../type';
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
  const INITIAL_STATE: UserInfoType = {
    email: '',
    password: '',
  };

  const { updateUser } = useContext(UserInfoContext);

  const [user, setUserInfo] = useState<UserInfoType>(INITIAL_STATE);
  const [isDisable, setIsDisable] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const url = 'http://localhost:3001/user/login';
  const requestBody = user;
  const {
    handleFetch, data, isLoading,
  } = useFetch(url, { method: 'POST', body: requestBody });

  const validateFields = ({ email, password }: UserInfoType) => {
    const validateRegexEmail = /\S+@\S+\.\S+/;
    const isValid = validateRegexEmail.test(email) && password.length >= 6;
    setIsDisable(!isValid);
  };

  const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    const updateUserInfo = { ...user, [name]: value };
    setUserInfo(updateUserInfo);
    validateFields(updateUserInfo);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleFetch();
    setIsModalOpen(true);
    updateUser(user);
    localStorage.setItem('user', JSON.stringify(user.email));
    setUserInfo(INITIAL_STATE);
  };

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
              disabled={ isDisable }
            >
              Entrar
            </Button>
          </Form>
          <NoAccountDiv>
            <Phrase>
              Don't have an account? Sign up
              { ' ' }
              <Link to="/signup">here</Link>
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
