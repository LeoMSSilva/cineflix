export type IFilm = {
  id: number;
  country: string;
  director: string;
  image: string;
  releaseYear: number;
  title: string;
};

export type ISortingType = 'country' | 'name' | 'year';
