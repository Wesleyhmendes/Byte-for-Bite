import * as S from './FilterButtons.style'

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
    <S.ButtonContainer>
      <S.FilterButton 
        onClick={ handleFilterAll } 
        data-testid="filter-by-all-btn">
        All
      </S.FilterButton>
      <S.FilterButton
        onClick={ handleFilterMeals }
        data-testid="filter-by-meal-btn"
      >
        Meals
      </S.FilterButton>
      <S.FilterButton
        onClick={ handleFilterDrinks }
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </S.FilterButton>
    </S.ButtonContainer>
  );
};

export default FilterButtons;