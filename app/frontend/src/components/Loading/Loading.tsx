import loadingGIF from '../../assets/Images/loading.gif';
import {
  Div,
  Img,
  H3,
} from './Loading.styles';

function Loading() {
  return (
    <Div>
      <Img src={ loadingGIF } alt="Loading frying pan" />
      <H3>Loading...</H3>
    </Div>
  );
}

export default Loading;
