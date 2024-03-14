type RecipeInfoProps = {
  recipeType: string;
  recipeData: any;
}

function RecipeInfo({recipeData, recipeType}: RecipeInfoProps) {
  return (
    <>
      <img
        data-testid="recipe-photo"
        src={recipeData[`str${recipeType}Thumb`]}
        alt={recipeData[`str${recipeType}`]}
      />

      <h2 data-testid="recipe-title">{recipeData[`str${recipeType}`]}</h2>

      <p data-testid="recipe-category">{recipeData.strCategory}</p>
    </>
  );
};

export default RecipeInfo;