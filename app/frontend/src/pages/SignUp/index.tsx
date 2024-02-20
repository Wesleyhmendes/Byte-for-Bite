import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import useSignUp from '../../hooks/useSignUp';
import validateUser from '../../utils/functions/validateUser';
import { useContext } from 'react';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';

function SignUp() {
  const { user, RESET_USER, signUpDispatch, handleChange } = useSignUp();
  const isInvalid = validateUser(user); 
  const navigate = useNavigate();
  const { updateUser } = useContext(UserInfoContext)    

  const { confirmPassword, ...rest } = user;
  const requestBody = rest;
   

  const signUpURL = 'http://localhost:3001/user';
  const { handleFetch, data, dispatch } = useFetch(signUpURL, { method: 'POST', body: requestBody });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();    
    
    await handleFetch();

    updateUser({      
      email: user.email,
      password: user.password
    })

    localStorage.setItem('user', JSON.stringify(user.email));

    signUpDispatch({type: RESET_USER});

    navigate('/meals');
  } 
  

  if (data) {
    if (data.message) {
      window.alert(data.message)
      dispatch({type: 'reset'});
    }
  }
  
  return(
    <main>
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
    </main>
  )
}

export default SignUp;