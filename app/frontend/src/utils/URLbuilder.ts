import { FetchType, FilterRadioType } from "../type";

const urlBuilder = (type: string, { radioSelected, search }: FetchType) => {
  let url = '';
  switch (radioSelected) {
    case 'ingredient':
      url = `https://www.the${type}db.com/api/json/v1/1/filter.php?i=${search}`;
      return url;
    case 'name':
      url = `https://www.the${type}db.com/api/json/v1/1/search.php?s=${search}`;
      return url;
    case 'category':
      url = `https://www.the${type}db.com/api/json/v1/1/filter.php?c=${search}`;
      return url;
    case 'mealCategories':
      url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
      return url;
    case 'drinkCategories':
      url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
      return url;
    case 'clear':
      url = `https://www.the${type}db.com/api/json/v1/1/search.php?s=`;
      return url;
    case 'firstLetter':
      if ((search as string).length  > 1) {
        window.alert('Your search must have only 1 (one) character');
      } else {
        url = `https://www.the${type}db.com/api/json/v1/1/search.php?f=${search}`;
        return url;
      }     
    default:
      return url;
  }
}

export default urlBuilder;