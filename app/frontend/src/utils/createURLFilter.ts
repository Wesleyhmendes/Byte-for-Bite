export const createURLFilter = (path: string, radioSelected: string, search: string) => {
  let URL_API = '';
  if (radioSelected === 'i') {
    URL_API = `http://localhost:3001${path}/ingredient?q=${search}`;
  }
  if (radioSelected === 's') {
    URL_API = `http://localhost:3001${path}/name?q=${search}`;
  }
  if (radioSelected === 'f') {
    URL_API = `http://localhost:3001${path}/letter?q=${search}`;
  }
  return URL_API;
};
