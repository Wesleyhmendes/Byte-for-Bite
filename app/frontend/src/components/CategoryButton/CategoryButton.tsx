/* eslint-disable max-len */
import { Button } from './Category.styles';

type CategoryBtnProps = {
  strCategory: string,
  getSelectedCategory: (category: string) => void
};

function CategoryButton({ strCategory, getSelectedCategory }: CategoryBtnProps) {
  return (
    <Button
      onClick={ strCategory === 'All' ? () => getSelectedCategory('') : () => getSelectedCategory(strCategory) }
      data-testid={ `${strCategory}-category-filter` }
    >
      {strCategory}
    </Button>
  );
}

export default CategoryButton;
