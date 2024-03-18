import loadingGIFMobile from '../../assets/Icons/loading_gif.gif';
import loadingGIFTablet from '../../assets/Icons/loading_tablet.gif';
import loadingGIFDesktop from '../../assets/Icons/loading_desktop.gif';

import {
  Div, Desktop, Tablet, Mobile,
} from './Loading.styles';

function Loading() {
  return (
    <Div>
      <Mobile src={ loadingGIFMobile } alt="Byte for bite logo" />
      <Tablet src={ loadingGIFTablet } alt="Byte for bite logo" />
      <Desktop src={ loadingGIFDesktop } alt="Byte for bite logo" />
    </Div>
  );
}

export default Loading;
