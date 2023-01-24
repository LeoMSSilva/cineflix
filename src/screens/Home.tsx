import { useState } from 'react';

import { IFilm } from '../@types/films';
import { FilmCard } from '../components/FilmCard';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { FILMS } from '../utils/films';

export const Home = () => {
  const [films, setFilms] = useState<IFilm[]>(FILMS);

  return (
    <div className="flex h-screen w-full flex-col justify-between">
      <header className="4xl:w-[2150px] mt-20 flex w-[90vw] flex-col items-center justify-around xl:w-[1200px]">
        <Header />
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
