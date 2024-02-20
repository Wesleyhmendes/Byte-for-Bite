import loadingGIF from '../../assets/Images/loading.gif';

function Loading () {
  return (
    <div>
      <img src={ loadingGIF } alt="Loading frying pan" />
      <h3>Loading...</h3>
    </div>
  )
}

export default Loading;