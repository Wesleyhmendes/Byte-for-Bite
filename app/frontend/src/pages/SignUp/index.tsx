import useFetch from '../../hooks/useFetch';
import validateUser from '../../utils/functions/validateUser';
import { useContext, useState } from 'react';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import Loading from '../../components/Loading/Loading';
import Modal from '../../components/Modals/SignUpModal';


function SignUp() {
  const { user, RESET_USER, handleChange, signUpDispatch } = useContext(UserInfoContext) 

  const isInvalid = validateUser(user);   

  const { confirmPassword, ...rest } = user;
  const requestBody = rest;   

  const signUpURL = 'http://localhost:3001/user';
  const { handleFetch, data, isLoading, error } = useFetch(signUpURL, { method: 'POST', body: requestBody });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();    
    
    await handleFetch();   

    localStorage.setItem('user', JSON.stringify(user.email));
    
    signUpDispatch({type: RESET_USER})

    setIsModalOpen(true);    
  } 
  
  return(
    <main>
    {!isModalOpen ? (
      <>
        <h2>
          SignUp
        </h2>
        <form onSubmit={ handleSubmit }>
          <label>
            E-mail:
            <input 
              type="email"
              name="email"
              value={ user.email }
              onChange={ handleChange }      
              placeholder="Ex.: email@email.com"
            />
          </label>
          <label>
            Username:
            <input 
              type="text"
              name='username'            
              value={ user.username }
              onChange={ handleChange }
            />
          </label>
          <label>
            Password:
            <input
              name="password"
              type="password"                  
              value={ user.password }
              onChange={ handleChange }
            />
          </label>
          <label>
            Please confirm your password:
            <input
              name="confirmPassword"
              type="password"  
              value={ user.confirmPassword } 
              onChange={ handleChange }           
            />
          </label>
          <button                    
            disabled={ isInvalid }
          >
            Sign up
          </button>
        </form>
      </>

    ) : null }

    { isModalOpen && isLoading ? (

      <Loading />

    ) : null }

    { isModalOpen && !isLoading ? (

      <Modal data={ data } setIsModalOpen={ setIsModalOpen }/>

    ) : null }

    {isModalOpen && error ? (

      <h4>Unexpected error... Please try again.</h4>

    ) : null }
    
    </main>
  )
}

export default SignUp;