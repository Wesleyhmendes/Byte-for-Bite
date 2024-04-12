import { IoIosCloseCircle } from "react-icons/io";

type ClearFilter = {
  byFilter: number;
  filter: boolean;
}

function ClearFilter({ byFilter, filter }: ClearFilter) {
  return (
    <>
      { byFilter >= 0 && filter ? (
        <button
          onClick={ () => window.location.reload() }
          className="clearFilter">
          Clear Filter <IoIosCloseCircle size={ 20 } />
        </button>
      ) : null }
    </>
  );
}

export default ClearFilter;
