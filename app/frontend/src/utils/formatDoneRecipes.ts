import {
  DoneDrinkType,
  DoneMealType,
  DoneMealReduceType,
  FetchedData,
  DoneDrinkReduceType,
} from '../type';

const doneMealReducer = (doneRecipe: DoneMealType[]) => {
  if (!Array.isArray(doneRecipe)) {
    return { userId: undefined, finishedRecipes: [] };
  }
  const reduceDone = doneRecipe.reduce((acc, done) => {
    if (!acc.userId) {
      acc = {
        userId: done.userId,
        finishedRecipes: [],
      };
    }

    acc.finishedRecipes.push(done.finishedRecipes);

    return acc;
  }, {} as DoneMealReduceType);

  return reduceDone;
};

const doneDrinkReducer = (doneRecipe: DoneDrinkType[]) => {
  if (!Array.isArray(doneRecipe)) {
    return { userId: undefined, finishedRecipes: [] };
  }
  const reduceDone = doneRecipe.reduce((acc, done) => {
    if (!acc.userId) {
      acc = {
        userId: done.userId,
        finishedRecipes: [],
      };
    }

    acc.finishedRecipes.push(done.finishedRecipes);

    return acc;
  }, {} as DoneDrinkReduceType);

  return reduceDone;
};

const formatDoneRecipes = (recipeType: string, doneRecipes: FetchedData) => {
  const { data } = doneRecipes;
  if (data && recipeType === '/meals') {
    const done: DoneMealType[] = data;
    const formattedFinished = doneMealReducer(done);

    return formattedFinished;
  }
  if (data && recipeType === '/drinks') {
    const done: DoneDrinkType[] = data;
    const formattedFinished = doneDrinkReducer(done);

    return formattedFinished;
  }
  return undefined;
};

export default formatDoneRecipes;
