import { useContext } from 'react';
import { Button } from './Category.styles';
import Context from '../../context/Context';
import setCategoryClass from '../../utils/readCtegory';

type CategoryBtnProps = {
  strCategory: string,
  getSelectedCategory: (category: string) => void
};

function CategoryButton({ strCategory, getSelectedCategory }: CategoryBtnProps) {
  const handleSelectCategory = () => {
    if (strCategory === 'All') {
      getSelectedCategory('');
    } else {
      getSelectedCategory(strCategory);
    }
  };

  const { selectedCategory } = useContext(Context);
  const categoryClass = setCategoryClass(selectedCategory, strCategory);

  return (
    <Button
      className={ categoryClass }
      onClick={ handleSelectCategory }
      data-testid={ `${strCategory}-category-filter` }
    >
      {strCategory}
    </Button>
  );
}

export default CategoryButton;
