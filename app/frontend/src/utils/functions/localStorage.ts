export const verifyLocalStorageKeys = (...keys: string[]) => {
  keys.forEach((key) => {
    if (!localStorage.getItem(key)) {
      if (key !== 'inProgressRecipes') localStorage.setItem(key, JSON.stringify([]));
      else localStorage.setItem(key, JSON.stringify({ meals: {}, drinks: {} }));
    }
  });
};
