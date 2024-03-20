import * as S from './Recipes.styles';

type SelectPagesButtonProps = {
  pages: number[];
  handlePageNum: (page: number) => void;
};

function SelectPageButtons({ pages, handlePageNum }: SelectPagesButtonProps) {
  return (
    <S.PageButtonContainer>
      {pages.map((page) => (
        <button
          key={ `page${page}` }
          onClick={ () => handlePageNum(page) }
        >
          {page}
        </button>
      ))}
    </S.PageButtonContainer>
  );
}

export default SelectPageButtons;
