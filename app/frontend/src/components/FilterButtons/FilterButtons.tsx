type FilterBtnProps = {
  setFilter: (value: React.SetStateAction<string>) => void
}

function FilterButtons({ setFilter }: FilterBtnProps) {
  const handleFilterAll = () => {
    setFilter('all')
  }

  const handleFilterMeals = () => {
    setFilter('meals')
  }

  const handleFilterDrinks = () => {
    setFilter('drinks')
  }
  return(
    <>
      <button 
        onClick={ handleFilterAll } 
        data-testid="filter-by-all-btn">
        All
      </button>
      <button
        onClick={ handleFilterMeals }
        data-testid="filter-by-meal-btn"
      >
        Meals
      </button>
      <button
        onClick={ handleFilterDrinks }
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
    </>
  );
};

export default FilterButtons;