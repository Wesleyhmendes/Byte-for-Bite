import { JwtPayload, jwtDecode } from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google';
import { useLocation } from 'react-router-dom';
import { UserAction } from '../../type';

type GoogleSignUpProps = {
  signUpDispatch: React.Dispatch<UserAction>;
  setGoogleUser: React.Dispatch<React.SetStateAction<boolean>>;

};

export default function GoogleAuth({ signUpDispatch, setGoogleUser }: GoogleSignUpProps) {
  const route = useLocation().pathname;

  return (
    <div>
        <GoogleLogin
          size="large"
          theme="filled_black"
          text={ route.endsWith('signup') ? 'signup_with' : 'continue_with' }
          onSuccess={ (credentialResponse) => {
            const decode = jwtDecode<JwtPayload>(
              credentialResponse?.credential as string,
            );
            const googleUser = {
              email: decode.email as string,
              username: decode.name as string,
              profileImage: decode.picture as string,
              email_verified: decode.email_verified ? 'true' : 'false',
            };
            signUpDispatch({ type: 'GOOGLE_USER', value: googleUser });
            setGoogleUser((prev) => !prev);
          } }
          onError={ () => {
            console.log('Login Failed');
          } }
        />
    </div>
  );
}
