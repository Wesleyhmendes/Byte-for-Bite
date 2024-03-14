type RecipeVideoProps = {
  recipeData: any;
}

function RecipeVideo({ recipeData }: RecipeVideoProps) {
  return (
    <iframe
      data-testid="video"
      width="560"
      height="315"
      src={`${recipeData.strYoutube}`.replace('watch?v=', '/embed/')}
      title="YouTube video player"
      allow="accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share"
      allowFullScreen
    />
  );
};

export default RecipeVideo;