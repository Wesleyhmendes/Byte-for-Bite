import { useNavigate } from 'react-router-dom';
import {
  Div, H3, Button,
} from './SignUpModal.styles';

type ModalProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  data: any,
};

function Modal(props: ModalProps) {
  const { setIsModalOpen, data } = props;
  const token = data.token ? data.token : undefined;
  const message = data.message ? data.message : null;
  const navigate = useNavigate();
  const route = token ? '/meals' : '/signup';
  const returnMessage = token ? 'Registration complete!' : message;

  const handleModal = () => {
    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
    }
    setIsModalOpen(false);
    navigate(route);
  };

  return (
    <Div>
      <H3>
        { returnMessage }
      </H3>
      <Button
        onClick={ handleModal }
      >
        Ok
      </Button>
    </Div>
  );
}

export default Modal;
