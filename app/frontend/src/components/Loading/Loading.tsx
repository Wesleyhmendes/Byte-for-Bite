import loadingGIFMobile from '../../assets/Icons/loading_gif.gif';
import loadingGIFTablet from '../../assets/Icons/loading_tablet.gif';
import loadingGIFDesktop from '../../assets/Icons/loading_desktop.gif';

import {
  Div, Desktop, Tablet, Mobile,
} from './Loading.styles';

function Loading() {
  return (
    <Div>
      <Mobile
        aria-label="mobile-loading"
        src={ loadingGIFMobile }
        alt="Byte for bite logo"
      />
      <Tablet
        aria-label="tablet-loading"
        src={ loadingGIFTablet }
        alt="Byte for bite logo"
      />
      <Desktop
        aria-label="desktop-loading"
        src={ loadingGIFDesktop }
        alt="Byte for bite logo"
      />
    </Div>
  );
}

export default Loading;
