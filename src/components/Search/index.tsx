import { FilterIcon } from "../icons/FilterIcon";
import { SearchIcon } from "../icons/SearchIcon";

interface ISearchProps {
  onOpenClickFilter: () => void;
}

export const Search = ({ onOpenClickFilter }: ISearchProps) => {
  return (
    <>
      <div className="w-5/6 p-2 mr-5 flex items-center rounded-lg shadow-sm bg-slate-100">
        <SearchIcon />
        <input
          type="search"
          className="w-full px-4 text-gray-700 rounded-lg focus:outline-none bg-transparent"
          placeholder="Search"
        />
      </div>
      <button
        onClick={onOpenClickFilter}
        className="w-1/6 p-2 flex items-center justify-center rounded-lg shadow-sm bg-slate-100 text-base text-gray-500"
        type="button"
      >
        <span className="mr-3">Filters</span>
        <FilterIcon />
      </button>
    </>
  );
};
