import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import {
  ModalDiv,
  H3,
  Button,
} from './Modal.styles';
import UserInfoContext from '../../../context/UserInfo/UserInfoContext';

type ModalProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  message: string | undefined,
  token: string | undefined,
};

function LoginModal(props: ModalProps) {
  const { setIsModalOpen, message, token } = props;
  const { profile } = useContext(UserInfoContext);
  const { handleFetch } = profile;
  const returnMessage = message || 'Welcome!';
  const navigate = useNavigate();

  const handleModal = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  if (token) {
    localStorage.setItem('token', JSON.stringify(token));
    setTimeout(() => {
      handleFetch();
      navigate('/meals');
      setIsModalOpen(false);
    }, 1000);
  }

  return (
    <ModalDiv>
      <H3>
        { returnMessage }
      </H3>
      {message ? (
        <Button
          aria-label="loginModal-btn"
          onClick={ handleModal }
        >
          Ok
        </Button>

      ) : null }
    </ModalDiv>
  );
}

export default LoginModal;
