type CategoryBtnProps = {
  strCategory: string,
  getSelectedCategory: (category: string) => void
};

function CategoryButton({ strCategory, getSelectedCategory }: CategoryBtnProps) {
  return (
    <button
      onClick={ () => getSelectedCategory(strCategory) }
      data-testid={ `${strCategory}-category-filter` }
    >
      {strCategory}
    </button>
  );
}

export default CategoryButton;
