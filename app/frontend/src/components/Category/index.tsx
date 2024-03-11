import { useContext } from 'react';
import { CategoryType } from '../../type';
import CategoryButton from '../CategoryButton/CategoryButton';
import Context from '../../context/Context';
import {
  Button,
  Section,
} from './Category.styles';

export default function Category() {
  const { getCategories, getSelectedCategory } = useContext(Context);

  const allCategories = getCategories();

  return (
    <Section>
      {!allCategories ? <p>Carregando...</p> : null}

      {allCategories ? allCategories?.map(({ strCategory }: CategoryType) => (
        <CategoryButton
          key={ strCategory }
          strCategory={ strCategory }
          getSelectedCategory={ getSelectedCategory }
        />
      ))
        : null}
      {allCategories ? (
        <Button
          onClick={ () => getSelectedCategory('') }
          data-testid="All-category-filter"
        >
          All
        </Button>
      ) : null}
    </Section>
  );
}
