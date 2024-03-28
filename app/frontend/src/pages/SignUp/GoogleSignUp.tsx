import { JwtPayload, jwtDecode } from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { UserAction } from '../../type';

type GoogleSignUpProps = {
  signUpDispatch: React.Dispatch<UserAction>;
};

export default function GoogleSignUp({ signUpDispatch }: GoogleSignUpProps) {
  const navigate = useNavigate();
  return (
    <div className="google">
      <GoogleLogin
        size="large"
        theme="filled_black"
        onSuccess={ (credentialResponse) => {
          const decode = jwtDecode<JwtPayload>(credentialResponse?.credential as string);
          signUpDispatch({
            type: 'UPDATE_USER', key: 'email', value: decode.email,
          });
          signUpDispatch({
            type: 'UPDATE_USER', key: 'username', value: decode.name,
          });
          signUpDispatch({
            type: 'UPDATE_USER', key: 'profileImage', value: decode.picture,
          });
          navigate('/meals');
        } }
        onError={ () => {
          console.log('Login Failed');
        } }
      />
    </div>
  );
}
