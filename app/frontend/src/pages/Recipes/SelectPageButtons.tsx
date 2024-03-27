/* eslint-disable max-len */
import { useContext } from 'react';
import * as S from './Recipes.styles';
import Context from '../../context/Context';

type SelectPagesButtonProps = {
  pages: number[];
  handlePageNum: (page: number) => void;
  currentPage: number;
};

function SelectPageButtons({ pages, handlePageNum, currentPage }: SelectPagesButtonProps) {
  const { filter } = useContext(Context);
  const slicePages = () => {
    if (currentPage < 4) return pages.slice(0, 5);
    if (currentPage >= pages.length - 2) return pages.slice(pages.length - 5, pages.length);

    return pages.slice(currentPage - 3, currentPage + 2);
  };

  const pagesToRender = slicePages();

  return (
    <S.PageButtonContainer>
      { !filter.searchActive && currentPage >= 4 && (
        <S.AsideBtn className="firstPage">
          <button
            aria-label="firstPage-btn"
            onClick={ () => handlePageNum(1) }
          >
            1
          </button>
          <p>...</p>
        </S.AsideBtn>
      ) }
      { !filter.searchActive && pagesToRender.map((page) => (
        <div className={ currentPage === page ? 'selected' : '' } key={ `page${page}` }>
          <button
            aria-label="pageNum-btn"
            onClick={ () => handlePageNum(page) }
          >
            { page }
          </button>
        </div>
      )) }
      { !filter.searchActive && currentPage <= pages.length - 3 && (
        <S.AsideBtn className="lastPage">
          <p>...</p>
          <button
            aria-label="lastPage-btn"
            onClick={ () => handlePageNum(pages.length) }
          >
            { pages.length }
          </button>
        </S.AsideBtn>
      ) }
    </S.PageButtonContainer>
  );
}

export default SelectPageButtons;
