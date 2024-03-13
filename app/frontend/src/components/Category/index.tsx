import { useContext } from 'react';
import { CategoryType } from '../../type';
import CategoryButton from '../CategoryButton/CategoryButton';
import Context from '../../context/Context';
import * as S from './Category.styles';

export default function Category() {
  const { getCategories, getSelectedCategory } = useContext(Context);

  const allCategories = getCategories();  

  return (
    <S.Section>
      {!allCategories ? <p>Carregando...</p> : null}

      {allCategories
        ? allCategories?.map(
            ({ strCategory, strCategoryThumb }: CategoryType) => (
              <CategoryButton
                key={strCategory}
                strCategoryThumb={strCategoryThumb}
                strCategory={strCategory}
                getSelectedCategory={getSelectedCategory}
              />
            )
          )
        : null}
      {allCategories ? (
        <S.Button
          onClick={() => getSelectedCategory('')}
          data-testid="All-category-filter"
        >
          All
        </S.Button>
      ) : null}
    </S.Section>
  );
}
