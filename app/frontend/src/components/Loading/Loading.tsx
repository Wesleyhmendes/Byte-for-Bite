import loadingGIF from '../../assets/Images/Byte_for_Bite_1.gif';
import {
  Div,
  Img,
  H3,
} from './Loading.styles';

function Loading() {
  return (
    <Div>
      <Img src={ loadingGIF } alt="Byte for bite logo" />
      <H3>Loading...</H3>
    </Div>
  );
}

export default Loading;
