import { Button } from './Category.styles';

type CategoryBtnProps = {
  strCategory: string,
  strCategoryThumb: string;
  getSelectedCategory: (category: string) => void
};

function CategoryButton({ strCategory, strCategoryThumb, getSelectedCategory }: CategoryBtnProps) {
  return (
    <Button
      onClick={ () => getSelectedCategory(strCategory) }
      data-testid={ `${strCategory}-category-filter` }
      // backgroundImage={strCategoryThumb}       
    >      
      {strCategory}
    </Button>    
  );
}

export default CategoryButton;
