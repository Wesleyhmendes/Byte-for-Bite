type CategoryBtnProps = {
  strCategory: string,
  getByCategory: (category: string) => void
}

function CategoryButton({ strCategory, getByCategory }: CategoryBtnProps) {
  return (
    <button
      onClick={() => getByCategory(strCategory)}
      data-testid={`${strCategory}-category-filter`}      
    >
      {strCategory}
    </button>
  );
}

export default CategoryButton;
