/* eslint-disable max-len */

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
    <button
      onClick={ handleSelectCategory }
      data-testid={ `${strCategory}-category-filter` }
    >
      {strCategory}
    </button>
  );
}

export default CategoryButton;
