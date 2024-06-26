type RecipeInstructionsProps = {
  instructions: string[];
};

function RecipeInstructions({ instructions }: RecipeInstructionsProps) {
  return (
    <>
      <h2>Instructions:</h2>
      {instructions.map((paragraph, index) => (
        <p aria-label={ `instruction-${index + 1}` } key={ index }>{`- ${paragraph}`}</p>
      ))}
    </>
  );
}

export default RecipeInstructions;
