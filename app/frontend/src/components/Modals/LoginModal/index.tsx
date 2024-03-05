import { useNavigate } from 'react-router-dom';
import {
  ModalDiv,
  H3,
  Button,
} from './Modal.styles';

type ModalProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  message: string,
  token: string,
};

function LoginModal(props: ModalProps) {
  const { setIsModalOpen, message, token } = props;

  const returnMessage = message || 'Welcome!';
  const navigate = useNavigate();

  const handleModal = () => {
    if (message) {
      setIsModalOpen(false);
      navigate('/');
    }
  };

  if (token) {
    localStorage.setItem('token', JSON.stringify(token));
    setTimeout(() => {
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
          onClick={ handleModal }
        >
          Ok
        </Button>

      ) : null }
    </ModalDiv>
  );
}

export default LoginModal;
