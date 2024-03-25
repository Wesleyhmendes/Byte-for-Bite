import { useContext, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';

import Loading from '../../components/Loading/Loading';
import Modal from '../../components/Modals/SignUpModal';
import logo from '../../assets/Images/BfB_Logo.png';

import { FetchOptions } from '../../type';
import * as S from './SignUp.styles';
import SignUpForm from './SignUpForm';

function SignUp() {
  document.title = 'SignUp | Byte for Bite';

  const { user, RESET_USER, handleChange, signUpDispatch } = useContext(UserInfoContext);

  const { confirmPassword, ...rest } = user;
  const requestBody = rest;

  // SEND USER DATA TO DB
  const signUpURL = 'http://localhost:3001/user';
  const options: FetchOptions = { method: 'POST', body: requestBody };
  const { handleFetch, data, isLoading } = useFetch(signUpURL, options);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // SUBMITS DATA INVOKING handleFetch, SAVES USER E-MAIL IN LOCALSTORAGE FOR FURTHER USAGE, RESETS CONTEXT USER INFO AND SET MODAL OPEN FOR BACKEND AUTH.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleFetch();

    localStorage.setItem('user', JSON.stringify(user.email));
    signUpDispatch({ type: RESET_USER });
    setIsModalOpen(true);
  };

  return (
    <S.Main>
      <section>
        <div>
          <img src={ logo } alt="App Logo" />
        </div>
        { !isModalOpen ? (
          <SignUpForm
            user={ user }
            handleChange={ handleChange }
            handleSubmit={ handleSubmit }
          />

        ) : null }

        { isModalOpen && isLoading ? (

          <Loading />

        ) : null }

        { isModalOpen && !isLoading ? (

          <Modal data={ data } setIsModalOpen={ setIsModalOpen } />

        ) : null }

      </section>
    </S.Main>
  );
}

export default SignUp;
