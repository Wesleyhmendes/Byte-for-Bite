import { useNavigate } from 'react-router-dom';

type ModalProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  message: string,  
}

function Modal(props: ModalProps) {
  const { setIsModalOpen, message } = props;
  const navigate = useNavigate();
  const route = message.includes('created!') ? '/meals' : '/signup';
  const returnMessage = message.includes('created!') ? 'Registration complete!' : message

  const handleModal = () => {
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