import { useLocation } from 'react-router-dom';
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import DrinksContext from '../../context/DrinkContext/DrinksContext';
import MealsContext from '../../context/MealContext/MealsContext';
import { FilterRadioType } from '../../type';

function SearchBar() {
  const [userSearchInfo, setUserSearchInfo] = useState<FilterRadioType>({
    radioSelected: 'ingredient',
    search: '',
  });

  const { getMealsByFilter } = useContext(MealsContext);
  const { getDrinksByFilter } = useContext(DrinksContext);

  const location = useLocation().pathname;

  const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    setUserSearchInfo({
      ...userSearchInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (location === '/meals') {
      getMealsByFilter(userSearchInfo);
    }
    if (location === '/drinks') {
      getDrinksByFilter(userSearchInfo);
    }
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label>
          <input
            data-testid="search-input"
            name="search"
            value={ userSearchInfo.search }
            onChange={ (event) => handleChange(event) }
            type="text"
            required
          />
        </label>

        <label>
          <input
            name="radioSelected"
            value="i"
            onChange={ (event) => handleChange(event) }
            data-testid="ingredient-search-radio"
            type="radio"
            required
          />
          Ingredient
        </label>

        <label>
          <input
            name="radioSelected"
            value="s"
            onChange={ (event) => handleChange(event) }
            data-testid="name-search-radio"
            type="radio"
            required
          />
          Name
        </label>

        <label>
          <input
            name="radioSelected"
            value="f"
            onChange={ (event) => handleChange(event) }
            data-testid="first-letter-search-radio"
            type="radio"
            required
          />
          First Letter
        </label>

        <button
          data-testid="exec-search-btn"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
