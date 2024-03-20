/* eslint-disable max-len */

type CategoryBtnProps = {
  strCategory: string,
  getSelectedCategory: (category: string) => void
};

function CategoryButton({ strCategory, getSelectedCategory }: CategoryBtnProps) {
  return (
    <button
      onClick={ strCategory === 'All' ? () => getSelectedCategory('') : () => getSelectedCategory(strCategory) }
      data-testid={ `${strCategory}-category-filter` }
    >
      {strCategory}
    </button>
  );
}

export default CategoryButton;
