import { useContext, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import validateUser from '../../utils/validateUser';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import Loading from '../../components/Loading/Loading';
import Modal from '../../components/Modals/SignUpModal';
import logo from '../../assets/Images/BfB_Logo.png';
import * as S from './SignUp.styles'

function SignUp() {
  const { user, RESET_USER, handleChange, signUpDispatch } = useContext(UserInfoContext);

  const isInvalid = validateUser(user);

  const { confirmPassword, ...rest } = user;
  const requestBody = rest;

  // SEND USER DATA TO DB
  const signUpURL = 'http://localhost:3001/user';
  const {
    handleFetch, data, isLoading, error,
  } = useFetch(signUpURL, { method: 'POST', body: requestBody });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // SUBMITS DATA INVOKING handleFetch, SAVES USER E-MAIL IN LOCALSTORAGE FOR FURTHER USAGE, RESETS CONTEXT USER INFO AND SET MODAL OPEN FOR BACKEND AUTH.
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await handleFetch();

    localStorage.setItem('user', JSON.stringify(user.email));
    signUpDispatch({ type: RESET_USER });

    setIsModalOpen(true);
  };

  return (
    <S.Main>
      <S.Section>
        <S.LogoDiv>
          <S.Logo src={ logo } alt="App Logo" />
        </S.LogoDiv>
        { !isModalOpen ? (
          <>            
            <S.Form onSubmit={ handleSubmit }>
              <S.Label>
                Email
                <S.Inputs
                  type="email"
                  name="email"
                  value={ user.email }
                  onChange={ handleChange }
                  placeholder="Ex.: email@email.com"                                   
                />
              </S.Label>
              <S.Label>
                Username
                <S.Inputs
                  type="text"
                  name="username"
                  value={ user.username }
                  onChange={ handleChange }
                />
              </S.Label>
              <S.Label>
                Password
                <S.Inputs
                  name="password"
                  type="password"
                  placeholder='At least 6 characters'
                  value={ user.password }
                  onChange={ handleChange }
                />
              </S.Label>
              <S.Label>
                Confirm your password
                <S.Inputs
                  name="confirmPassword"
                  type="password"
                  value={ user.confirmPassword }
                  onChange={ handleChange }
                />
              </S.Label>
              <S.Button
                disabled={ isInvalid }
              >
                Sign up
              </S.Button>
            </S.Form>
          </>

        ) : null }

        { isModalOpen && isLoading ? (

          <Loading />

        ) : null }

        { isModalOpen && !isLoading ? (

          <Modal data={ data } setIsModalOpen={ setIsModalOpen } />

        ) : null }

        { isModalOpen && error ? (

          <h4>Unexpected error... Please try again.</h4>

        ) : null }
      </S.Section>
    </S.Main>
  );
}

export default SignUp;
