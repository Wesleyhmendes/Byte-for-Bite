import { useContext } from 'react';
import { CategoryType } from '../../type';
import CategoryButton from '../CategoryButton/CategoryButton';
import Context from '../../context/Context';
import * as S from './Category.styles';

export default function Category() {
  const { getCategories, getSelectedCategory, route } = useContext(Context);

  const allCategories = getCategories();

  return (
    <S.Section>
      { !allCategories ? <p>Carregando...</p> : null }

      { allCategories
        ? allCategories?.map(
          ({ strCategory }: CategoryType) => (
            <CategoryButton
              key={ strCategory }
              strCategory={ strCategory }
              getSelectedCategory={ getSelectedCategory }
            />
          ),
        )
        : null }
      { allCategories ? (
        <div>
          <button
            onClick={ () => getSelectedCategory('') }
            data-testid="All-category-filter"
          >
            All
          </button>
          <S.Div path={ route } />
        </div>
      ) : null }
    </S.Section>
  );
}
