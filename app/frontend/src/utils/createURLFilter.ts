export const createURLFilter = (path: string, radioSelected: string, search: string) => {
  let URL_API = '';
  if (radioSelected === 'i') {
    URL_API = `${path}/ingredient?q=${search}`;
  }
  if (radioSelected === 's') {
    URL_API = `${path}/name?q=${search}`;
  }
  if (radioSelected === 'f') {
    URL_API = `${path}/letter?q=${search}`;
  }
  return URL_API;
};
