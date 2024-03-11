import loadingGIF from '../../assets/Images/Byte_for_Bite_1.gif';
import {
  Div,
  Img, 
} from './Loading.styles';

function Loading() {
  return (
    <Div>
      <Img src={ loadingGIF } alt="Byte for bite logo" />      
    </Div>
  );
}

export default Loading;
