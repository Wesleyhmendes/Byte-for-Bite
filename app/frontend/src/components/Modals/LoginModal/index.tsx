import { useNavigate } from 'react-router-dom';

type ModalProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  message: string,
  token: string,
}

function LoginModal(props: ModalProps) {
  const { setIsModalOpen, message, token } = props;
  
  const returnMessage = message ? message : 'Welcome!'  
  const navigate = useNavigate();  

  const handleModal = () => {
    if (message) {
      setIsModalOpen(false);
      navigate('/'); 
    }   
  }

  if (token) {
    localStorage.setItem('token', JSON.stringify(token));
    setInterval(() => {
      setIsModalOpen(false);
      navigate('/meals');
    }, 1000)
  }

  return (
    <div>
      <h3>
        { returnMessage }
      </h3>
      {message ? (
        <button
          onClick={ handleModal }
        >
          Ok
        </button>

      ) : null }
    </div>
  )
}

export default LoginModal;