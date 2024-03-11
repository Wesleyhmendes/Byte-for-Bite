import { ChangeEvent, FormEvent, useContext } from 'react';
import lupe from '../../assets/Icons/search-bar-lupe.svg';
import Context from '../../context/Context';
import {
  Div,
  Form,
  Label,
  LabelSearch,
  Filters,
  InputIngredient,
  InputName,
  Lupe,
  InputFirstLetter,
  InputSearch,
  FilterP,
  Button,
} from './SearchBar.styles';

function SearchBar() {
  const RESET_SEARCH = 'RESET_SEARCH';
  const SET_SEARCH = 'SET_SEARCH';
  const { filter, setRecipesFilter, filterDispatch } = useContext(Context);  

  // FILTER AND FILTER DISPATCH LOGIC CAN BE FOUND IN HOOK useSearchBar
  const handleFilterChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    filterDispatch({ type: SET_SEARCH, key: name, value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRecipesFilter(filter);
    filterDispatch({ type: RESET_SEARCH });
  };

  return (
    <Div>
      <Form onSubmit={ handleSubmit }>
        <LabelSearch>
          <InputSearch
            data-testid="search-input"
            name="search"
            value={ filter.search }
            onChange={ handleFilterChange }
            type="text"
            required
          />
          <Button
            data-testid="exec-search-btn"
          >
            <Lupe src={ lupe } alt="pesquisar" />
          </Button>
        </LabelSearch>
        <Filters>
          <Label>
            <InputIngredient
              name="radioSelected"
              value="i"
              onChange={ handleFilterChange }
              defaultChecked
              data-testid="ingredient-search-radio"
              type="radio"
              required
            />
            <FilterP className={ filter.radioSelected === 'i' ? 'active' : '' }>
              Ingredient
            </FilterP>
          </Label>

          <Label>
            <InputName
              name="radioSelected"
              value="s"
              onChange={ handleFilterChange }
              data-testid="name-search-radio"
              type="radio"
              required
            />
            <FilterP className={ filter.radioSelected === 's' ? 'active' : '' }>
              Name
            </FilterP>
          </Label>

          <Label>
            <InputFirstLetter
              name="radioSelected"
              value="f"
              onChange={ handleFilterChange }
              data-testid="first-letter-search-radio"
              type="radio"
              required
            />
            <FilterP className={ filter.radioSelected === 'f' ? 'active' : '' }>
              First Letter
            </FilterP>
          </Label>
        </Filters>
      </Form>
    </Div>
  );
}

export default SearchBar;
