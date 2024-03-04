import { useNavigate } from 'react-router-dom';

type ModalProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  data: any,  
}

function Modal(props: ModalProps) {
  const { setIsModalOpen, data } = props;
  const token = data.token ? data.token : undefined;
  const message = data.message ? data.message : null;
  const navigate = useNavigate();
  const route = token ? '/meals' : '/signup';
  const returnMessage = token ? 'Registration complete!' : message
  
  const handleModal = () => {
    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
    }
    setIsModalOpen(false);
    navigate(route);
  }

  return (
    <div>
      <h3>
        { returnMessage }
      </h3>
      <button
        onClick={ handleModal }
      >
        Ok
      </button>
    </div>
  )
}

export default Modal;