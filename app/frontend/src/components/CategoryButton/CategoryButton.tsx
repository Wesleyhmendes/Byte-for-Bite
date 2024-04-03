import { Button } from './Category.styles';

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
  return (
    <Button
      onClick={ handleSelectCategory }
      data-testid={ `${strCategory}-category-filter` }
    >
      {strCategory}
    </Button>
  );
}

export default CategoryButton;
