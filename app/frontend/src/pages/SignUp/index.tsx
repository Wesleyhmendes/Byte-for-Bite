import { ChangeEvent } from 'react';
import useSignup from '../../hooks/useSignup';
import validateUser from '../../utils/functions/validateUser';

function SignUp() {

  const { UPDATE_USER, user, dispatch  } = useSignup();
  const isInvalid = validateUser(user);  

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    dispatch({ type: UPDATE_USER, key: name, value });    
  }
  
  return(
    <main>
      <h2>
        SignUp
      </h2>
      <form>
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