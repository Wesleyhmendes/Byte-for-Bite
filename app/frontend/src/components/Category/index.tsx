import { useContext } from 'react';
import { CategoryType } from '../../type';
import CategoryButton from '../CategoryButton/CategoryButton';
import Context from '../../context/Context';

export default function Category() {
  const { categories, getByCategory } = useContext(Context)
  const { data, isLoading } = categories;
  const renderCategories: CategoryType[] = data?.slice(0, 5)


  return (
    <section>

      { isLoading ? <p>Carregando...</p> : null }

      {!isLoading && renderCategories
        ? renderCategories.map(({ strCategory }: CategoryType) => (
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
