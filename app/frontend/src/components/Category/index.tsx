import { useContext } from 'react';
import { CategoryType } from '../../type';
import CategoryButton from '../CategoryButton/CategoryButton';
import Context from '../../context/Context';

export default function Category() {  
  const { mealsCategories, drinksCategories, getSelectedCategory, path } = useContext(Context);   
  
  const handleData = () => {      
    if (path === '/meals' && mealsCategories.data) {      
      return mealsCategories.data as CategoryType[];
    } 
    if (path === '/drinks' && drinksCategories.data) {
      return drinksCategories.data.drinks as CategoryType[];
    }   
  }
  const getData = handleData();  
  const allCategories = getData?.slice(0, 5);  

  return (
    <section>
      {mealsCategories.isLoading || drinksCategories.isLoading ? (
        <p>Carregando...</p>
      ) : null}

      {!mealsCategories.isLoading && !drinksCategories.isLoading
        ? allCategories?.map(({ strCategory }: CategoryType) => (
            <CategoryButton
              key={strCategory}
              strCategory={strCategory}
              getSelectedCategory={getSelectedCategory}
            />
          ))
        : null}
      {!mealsCategories.isLoading && !drinksCategories.isLoading ? (
        <button
          onClick={() => getSelectedCategory('')}
          data-testid="All-category-filter"
        >
          All
        </button>
      ) : null}
    </section>
  );
}
