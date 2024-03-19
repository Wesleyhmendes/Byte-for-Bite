type RecipeInstructionsProps = {
  instructions: string[];
}

function RecipeInstructions({ instructions }: RecipeInstructionsProps) {
  return (
    <>
      <h2>Instructions:</h2>
      {instructions.map((paragraph) => (
        <p>{`- ${paragraph}`}</p>
      ))}
    </>
  );
}

export default RecipeInstructions;