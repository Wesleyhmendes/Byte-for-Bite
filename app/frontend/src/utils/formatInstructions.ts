const formatInstructions = (instructions: string) => {
  const instructionsArr = instructions.split('.');
  const regex = /^\r\n/;
  const formattedInstructions = instructionsArr
    .map((paragraph) => paragraph.replace(regex, ' ').trim())
    .filter((paragraph) => paragraph !== '');
    return formattedInstructions;
}

export default formatInstructions;