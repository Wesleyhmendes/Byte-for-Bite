export const createUrlMealsFilter = (radioSelected: string, search: string) => {
  let URL_API = '';
  if(radioSelected === 'i') {
    URL_API = `http://localhost:3001/meals/ingredient?q=${search}`
  }
  if(radioSelected === 's') {
    URL_API =`http://localhost:3001/meals/name?q=${search}`
  }
  if(radioSelected === 'f') {
    URL_API =`http://localhost:3001/meals/letter?q=${search}`
  }
  return URL_API;
}