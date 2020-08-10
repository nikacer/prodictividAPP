export interface RickAndMorty {
  episodios: Episodios;
  personajes: Personajes;
}

export interface Personajes {
  info: Info;
  results: Array<ResultsPersonajes>;
}

export interface ResultsPersonajes {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents?: Array<string>;
  url: string;
  created: string;
}

export interface Episodios {
  info: Info;
  results: Array<ResultsEpisodios>;
}
export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
export interface ResultsEpisodios {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters?: string[] | null;
  url: string;
  created: string;
}

export interface Results extends ResultsEpisodios, ResultsPersonajes {}
