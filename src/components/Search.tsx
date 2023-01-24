import { useState } from 'react';

import { MagnifyingGlass } from 'phosphor-react';

import { IFilm } from '../@types/films';
import { FILMS } from '../utils/films';

type Props = {
  setFilms: (films: IFilm[]) => void;
};

export const Search = ({ setFilms }: Props) => {
  const [searchField, setSearchField] = useState('');

  const filterFilms = () => {
    const filteredFilms = FILMS.filter(({ title }) =>
      title.toLowerCase().includes(searchField.toLowerCase()),
    );
    setFilms(filteredFilms);
    setSearchField('');
  };

  return (
    <div className="flex w-full lg:w-6/12">
      <button className="4xl:h-10 mb-0.5 flex h-8 w-full rounded border-transparent bg-zinc-600 transition-colors duration-500 ease-linear focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 focus:ring-offset-zinc-900 md:mx-auto md:w-8/12 lg:ml-0 lg:w-7/12">
        <input
          className="flex h-full flex-1 items-center justify-center border-transparent bg-transparent pl-3 text-xs text-white outline-none placeholder:text-zinc-400 2xl:text-sm"
          placeholder="Digite o nome do filme..."
          type="text"
          onChange={(e) => setSearchField(e.target.value)}
        />
        <button
          className="flex h-full cursor-pointer items-center justify-center  bg-transparent px-3 text-zinc-300 outline-none focus:text-red-700"
          onClick={() => filterFilms()}
        >
          <MagnifyingGlass
            className="4xl:h-5 4xl:w-5 h-4 w-4"
            weight="bold"
          />
        </button>
      </button>
    </div>
  );
};
