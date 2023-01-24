import { useEffect, useState } from 'react';

import { IFilm, ISortingType } from '../@types/films';
import { FilmCard } from '../components/FilmCard';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Search } from '../components/Search';
import { SelectSort } from '../components/SelectSort';
import { FILMS } from '../utils/films';

export const Home = () => {
  const [films, setFilms] = useState<IFilm[]>([] as IFilm[]);
  const [sortingType, setSortingType] = useState<ISortingType>('year');

  useEffect(() => sortByReleaseYear(), []);

  const sortByCountry = () => {
    const sortedFilms = FILMS.sort((a, b) => {
      const x: string = a.country.toUpperCase();
      const y: string = b.country.toUpperCase();
      return x == y ? 0 : x > y ? 1 : -1;
    });
    setFilms(sortedFilms);
  };

  const sortByName = () => {
    const sortedFilms = FILMS.sort((a, b) => {
      const x: string = a.title.toUpperCase();
      const y: string = b.title.toUpperCase();
      return x == y ? 0 : x > y ? 1 : -1;
    });
    setFilms(sortedFilms);
  };

  const sortByReleaseYear = () => {
    const sortedFilms = FILMS.sort((a, b) => a.releaseYear - b.releaseYear);
    setFilms(sortedFilms);
  };

  return (
    <div className="flex h-screen w-full flex-col justify-between">
      <header className="4xl:w-[2150px] mt-20 flex w-[90vw] flex-col items-center justify-around xl:w-[1200px]">
        <Header />
        <div className="mt-16 flex w-full flex-col items-center lg:flex-row-reverse">
          <Search setFilms={setFilms} />
          <SelectSort
            sortingType={sortingType}
            setSortingType={setSortingType}
            sortByCountry={sortByCountry}
            sortByName={sortByName}
            sortByReleaseYear={sortByReleaseYear}
          />
        </div>
      </header>
      <main className="4xl:w-[2150px] flex w-[90vw] flex-col items-center justify-around xl:w-[1200px]">
        <div className="4xl:grid-cols-4 my-8 grid w-full grid-cols-1 gap-4 lg:mb-10 lg:grid-cols-3">
          {films.map(({ id, country, director, title, image, releaseYear }) => (
            <FilmCard
              key={id}
              country={country}
              director={director}
              filmIsName={title}
              movieCover={image}
              releaseYear={releaseYear}
            />
          ))}
        </div>
        {films.length === 0 && (
          <p className="3xs:text-3xl 2xs:text-4xl 4xl:text-6xl w-full text-center text-xl font-medium text-zinc-100 xl:text-[2.4rem]">
            Nenhum resultado encontrado!
          </p>
        )}
      </main>
      <footer className="4xl:w-[2150px] flex w-[90vw] flex-col items-center justify-around xl:w-[1200px] ">
        <Footer />
      </footer>
    </div>
  );
};
