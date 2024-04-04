import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import {
  Div,
} from './SignUpModal.styles';
import {
  getMessage,
  getReturnMessage,
  getRoute,
  getToken,
} from '../../../utils/signUpModalUtils';
import UserInfoContext from '../../../context/UserInfo/UserInfoContext';

type ModalProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  data: any,
};

function Modal(props: ModalProps) {
  const { profile } = useContext(UserInfoContext);
  const { setIsModalOpen, data } = props;
  const token = getToken(data);
  const message = getMessage(data);
  const navigate = useNavigate();
  const route = getRoute(token);
  const returnMessage = getReturnMessage(token, message);

  const handleModal = () => {
    if (token !== 'Token not found') {
      localStorage.setItem('token', JSON.stringify(token));
      profile?.handleFetch();
    }
    setIsModalOpen(false);
    navigate(route);
  };

  return (
    <Div>
      <h3>
        { returnMessage }
      </h3>
      <button
        aria-label="signUp-modal-btn"
        onClick={ handleModal }
      >
        Ok
      </button>
    </Div>
  );
}

export default Modal;
