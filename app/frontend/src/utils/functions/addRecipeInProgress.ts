const addRecipeInProgress = async (path: string, recipeId: number, userid: number) => {
  const reqBody = path === '/meals' ? { userId: userid, mealId: recipeId } : { userId: userid, drinkId: recipeId }
  const token = JSON.parse(localStorage.getItem('token') as string);
  const URL = `http://localhost:3001${path}/inprogress`;
  const response = await fetch(URL, { method: 'POST', headers: { Authorization: `Bearer ${token}` }, body: JSON.stringify(reqBody) });
  const data = await response.json();
  return data;
};

export default addRecipeInProgress;