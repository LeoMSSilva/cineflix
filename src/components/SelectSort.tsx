import { ISortingType } from '../@types/films';

type ISelectSort = {
  sortingType: ISortingType;
  setSortingType: (type: ISortingType) => void;
  sortByCountry: () => void;
  sortByName: () => void;
  sortByReleaseYear: () => void;
};

export const SelectSort = ({
  sortingType,
  setSortingType,
  sortByCountry,
  sortByName,
  sortByReleaseYear,
}: ISelectSort) => {
  const changeSortTypeByCountry = () => setSortingType('country');
  const changeSortTypeByName = () => setSortingType('name');
  const changeSortTypeByReleaseYear = () => setSortingType('year');

  const handleSortByCountry = () => {
    changeSortTypeByCountry();
    sortByCountry();
  };

  const handleSortByName = () => {
    changeSortTypeByName();
    sortByName();
  };

  const handleSortByReleaseYear = () => {
    changeSortTypeByReleaseYear();
    sortByReleaseYear();
  };

  return (
    <div className="mb-0.5 flex w-full flex-col items-center justify-end md:flex-row lg:w-6/12">
      <button
        onClick={handleSortByReleaseYear}
        className={`${
          sortingType === 'year' ? 'bg-red-700' : 'bg-sky-700'
        } 4xl:w-48 4xl:h-10 mx-1 h-8 w-full border-transparent text-white transition-colors duration-500 ease-linear hover:cursor-pointer hover:bg-red-500 focus:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 focus:ring-offset-zinc-900 active:bg-red-700 lg:w-32 lg:rounded`}
      >
        Lançamento
      </button>
      <button
        onClick={handleSortByName}
        className={`${
          sortingType === 'name' ? 'bg-red-700' : 'bg-sky-700'
        } 4xl:w-48 4xl:h-10 mx-1 my-0.5 h-8 w-full border-transparent text-white transition-colors duration-500 ease-linear hover:cursor-pointer hover:bg-red-500 focus:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 focus:ring-offset-zinc-900 active:bg-red-700 lg:my-0 lg:w-32 lg:rounded`}
      >
        Nome
      </button>
      <button
        onClick={handleSortByCountry}
        className={`${
          sortingType === 'country' ? 'bg-red-700' : 'bg-sky-700'
        } 4xl:w-48 4xl:h-10 mx-1 h-8 w-full border-transparent text-white transition-colors duration-500 ease-linear hover:cursor-pointer hover:bg-red-500 focus:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 focus:ring-offset-zinc-900 active:bg-red-700 lg:w-32 lg:rounded`}
      >
        País
      </button>
    </div>
  );
};
