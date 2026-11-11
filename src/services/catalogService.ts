import { Media } from '../types/media';

export interface DetailedMedia extends Media {
  synopsis: string;
  duration?: string;
  director?: string;
  cast?: string[];
  trailerUrl?: string;
  seasons?: number;
  episodes?: number;
}

export const catalogData: DetailedMedia[] = [
  {
    id: '1',
    title: 'Inception',
    year: 2010,
    type: 'movie',
    posterUrl: 'https://picsum.photos/300/450?random=1',
    rating: 8.8,
    genres: ['Sci-Fi', 'Action', 'Thriller'],
    synopsis: 'Un voleur qui subtilise les secrets des gens à travers leurs rêves se voit offrir une chance de rachat s il parvient à implanter une idée dans l esprit d un PDG.',
    duration: '2h 28min',
    director: 'Christopher Nolan',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
    trailerUrl: 'https://www.youtube.com/embed/YoHD9XEInc0'
  },
  {
    id: '2',
    title: 'Breaking Bad',
    year: 2008,
    type: 'tv',
    posterUrl: 'https://picsum.photos/300/450?random=2',
    rating: 9.5,
    genres: ['Drama', 'Crime', 'Thriller'],
    synopsis: 'Un professeur de chimie atteint d un cancer du poumon s associe à un ancien élève pour fabriquer et vendre de la méthamphétamine afin de subvenir aux besoins de sa famille.',
    duration: '49min',
    director: 'Vince Gilligan',
    cast: ['Bryan Cranston', 'Aaron Paul', 'Anna Gunn'],
    seasons: 5,
    episodes: 62
  },
  {
    id: '3',
    title: 'Attack on Titan',
    year: 2013,
    type: 'anime',
    posterUrl: 'https://picsum.photos/300/450?random=3',
    rating: 9.1,
    genres: ['Action', 'Fantasy', 'Animation'],
    synopsis: 'Après qu un titan colossal a détruit sa ville natale, le jeune Eren Jaeger jure de nettoyer la terre de tous les titans géants qui menacent l humanité.',
    duration: '24min',
    director: 'Tetsuro Araki',
    cast: ['Yuki Kaji', 'Yui Ishikawa', 'Marina Inoue'],
    seasons: 4,
    episodes: 89
  },
  {
    id: '4',
    title: 'Interstellar',
    year: 2014,
    type: 'movie',
    posterUrl: 'https://picsum.photos/300/450?random=4',
    rating: 8.6,
    genres: ['Sci-Fi', 'Adventure', 'Drama'],
    synopsis: 'Un groupe d explorateurs utilise une faille dans l espace-temps pour voyager à travers l univers afin de garantir la survie de l humanité.',
    duration: '2h 49min',
    director: 'Christopher Nolan',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain']
  },
  {
    id: '5',
    title: 'Cyberpunk: Edgerunners',
    year: 2022,
    type: 'anime',
    posterUrl: 'https://picsum.photos/300/450?random=5',
    rating: 8.3,
    genres: ['Sci-Fi', 'Action', 'Animation'],
    synopsis: 'Dans un futur dystopique rongé par la cybernétique, un enfant des rues tente de survivre en devenant un edgerunner, un mercenaire hors-la-loi.',
    duration: '25min',
    director: 'Hiroyuki Imaishi',
    cast: ['KENN', 'Aoi Yuki', 'Hiroki Touchi'],
    seasons: 1,
    episodes: 10
  }
];
