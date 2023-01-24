type Props = {
  country: string;
  director: string;
  filmIsName: string;
  movieCover: string;
  releaseYear: number;
};

export const FilmCard = ({
  country,
  director,
  filmIsName,
  movieCover,
  releaseYear,
}: Props) => {
  return (
    <button className="flex flex-col items-center justify-around rounded border-transparent bg-zinc-800 p-4 transition-colors duration-500 ease-linear hover:cursor-pointer hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 focus:ring-offset-zinc-900 ">
      <figure className="flex w-full flex-col items-center">
        <img
          className="4xl:h-[320px] h-[300px] w-full object-cover lg:h-[280px] xl:h-[200px]"
          src={movieCover}
          alt={`imagem do filme ${filmIsName}`}
        />
        <figcaption className="2xs:w-11/12 3xs:w-[86%] my-2 w-full text-center font-bold text-red-600 md:text-lg lg:h-14 lg:w-10/12 xl:text-xl 2xl:h-16 2xl:w-full 2xl:text-2xl">
          {filmIsName}
        </figcaption>
      </figure>
      <span className="4xl:text-lg text-center text-sm font-medium text-sky-500 lg:text-base">
        Lançamento: {releaseYear}
      </span>
      <span className="4xl:text-lg my-0.5 text-center text-sm font-medium text-sky-500 lg:text-base">
        País: {country}
      </span>
      <span className="4xl:text-lg 2xs:w-[82%] 3xs:w-10/12 2xs:tracking-normal w-9/12 text-center text-sm font-medium tracking-tight text-sky-500 lg:text-base">
        Diretor: {director}
      </span>
    </button>
  );
};
