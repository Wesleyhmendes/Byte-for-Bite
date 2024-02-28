import { useContext, useEffect, useState } from 'react';
import { CategoryType } from '../../type';
import CategoryButton from '../CategoryButton/CategoryButton';
import Context from '../../context/Context';

export default function Category() {  
  const { categories, getByCategory, path } = useContext(Context);
  const { data, isLoading } = categories;   
  
  const handleData = () => {   
    if (data && path === 'meals') {
      // console.log('meals ---->', categories)
      return data as CategoryType[]
    }
    if (data && path === 'drinks') {
      // console.log('drinks  ---->',categories)
      return data.drinks as CategoryType[]
    }

    return []
  }
  const getData = handleData();
 
  
  const allCategories = getData?.slice(0, 5)  
  
  // console.log(allCategories) 

  return (
    <section>

      { isLoading ? <p>Carregando...</p> : null }

      {!isLoading ? allCategories?.map(({ strCategory }: CategoryType) => (
            <CategoryButton
              key={ strCategory }
              strCategory={strCategory}
              getByCategory={ getByCategory }
            />
          ))
        : null }

      <button
        onClick={ () => getByCategory('') }
        data-testid="All-category-filter"
      >
        All
      </button>
    </section>
  );
}
