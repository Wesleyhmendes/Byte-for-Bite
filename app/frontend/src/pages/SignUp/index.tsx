import { useContext, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import validateUser from '../../utils/functions/validateUser';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import Loading from '../../components/Loading/Loading';
import Modal from '../../components/Modals/SignUpModal';
import {
  Main,
  Section,
  H2,
  Form,
  Label,
  Input,
  Button,
} from './SignUp.styles';

function SignUp() {
  const { user, RESET_USER, handleChange, signUpDispatch } = useContext(UserInfoContext);

  const isInvalid = validateUser(user);

  const { confirmPassword, ...rest } = user;
  const requestBody = rest;

  const signUpURL = 'http://localhost:3001/user';
  const {
    handleFetch, data, isLoading, error,
  } = useFetch(signUpURL, { method: 'POST', body: requestBody });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await handleFetch();

    localStorage.setItem('user', JSON.stringify(user.email));

    signUpDispatch({ type: RESET_USER });

    setIsModalOpen(true);
  };

  return (
    <Main>
      <Section>
        { !isModalOpen ? (
          <>
            <H2>
              SignUp
            </H2>
            <Form onSubmit={ handleSubmit }>
              <Label>
                Email
                <Input
                  type="email"
                  name="email"
                  value={ user.email }
                  onChange={ handleChange }
                  placeholder="Ex.: email@email.com"
                />
              </Label>
              <Label>
                Username
                <Input
                  type="text"
                  name="username"
                  value={ user.username }
                  onChange={ handleChange }
                />
              </Label>
              <Label>
                Password
                <Input
                  name="password"
                  type="password"
                  value={ user.password }
                  onChange={ handleChange }
                />
              </Label>
              <Label>
                Confirm your password
                <Input
                  name="confirmPassword"
                  type="password"
                  value={ user.confirmPassword }
                  onChange={ handleChange }
                />
              </Label>
              <Button
                disabled={ isInvalid }
              >
                Sign up
              </Button>
            </Form>
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
      </Section>
    </Main>
  );
}

export default SignUp;
