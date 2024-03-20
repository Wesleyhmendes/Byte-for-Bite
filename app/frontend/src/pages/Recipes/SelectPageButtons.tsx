/* eslint-disable max-len */
import * as S from './Recipes.styles';

type SelectPagesButtonProps = {
  pages: number[];
  handlePageNum: (page: number) => void;
  currentPage: number;
};

function SelectPageButtons({ pages, handlePageNum, currentPage }: SelectPagesButtonProps) {
  const slicePages = () => {
    if (currentPage < 4) return pages.slice(0, 5);
    if (currentPage >= pages.length - 2) return pages.slice(pages.length - 5, pages.length);

    return pages.slice(currentPage - 3, currentPage + 2);
  };

  const pagesToRender = slicePages();

  return (
    <S.PageButtonContainer>
      { currentPage >= 4 && (
        <S.AsideBtn className="firstPage">
          <button onClick={ () => handlePageNum(1) }>1</button>
          <p>...</p>
        </S.AsideBtn>
      ) }
      { pagesToRender.map((page) => (
        <div className={ currentPage === page ? 'selected' : '' } key={ `page${page}` }>
          <button
            onClick={ () => handlePageNum(page) }
          >
            { page }
          </button>
        </div>
      )) }
      { currentPage <= pages.length - 3 && (
        <S.AsideBtn className="lastPage">
          <p>...</p>
          <button onClick={ () => handlePageNum(pages.length) }>{ pages.length }</button>
        </S.AsideBtn>
      ) }
    </S.PageButtonContainer>
  );
}

export default SelectPageButtons;
