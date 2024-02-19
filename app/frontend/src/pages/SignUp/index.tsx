import useFetch from '../../hooks/useFetch';
import useSignUp from '../../hooks/useSignUp';
import validateUser from '../../utils/functions/validateUser';

function SignUp() {
  const { user, RESET_USER, dispatch, handleChange } = useSignUp();
  const isInvalid = validateUser(user); 
    

  const { confirmPassword, ...rest } = user;
  const requestBody = rest;
   

  const signUpURL = 'http://localhost:3001/user';
  const { handleFetch } = useFetch(signUpURL, { method: 'POST', body: requestBody });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();    
    
    await handleFetch();

    dispatch({type: RESET_USER});
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