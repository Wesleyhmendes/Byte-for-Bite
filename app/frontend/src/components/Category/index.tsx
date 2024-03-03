import { useContext } from 'react';
import { CategoryType } from '../../type';
import CategoryButton from '../CategoryButton/CategoryButton';
import Context from '../../context/Context';

export default function Category() {  
  const { getCategories, getSelectedCategory } = useContext(Context);  
 
  const allCategories = getCategories();  

  return (
    <section>
      {!allCategories ? <p>Carregando...</p> : null}

      {allCategories ? allCategories?.map(({ strCategory }: CategoryType) => (
            <CategoryButton
              key={strCategory}
              strCategory={strCategory}
              getSelectedCategory={getSelectedCategory}
            />
          ))
        : null}
      {allCategories ? (
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
