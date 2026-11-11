export interface Media {
  id: string;
  title: string;
  year: number;
  type: 'movie' | 'tv' | 'anime';
  posterUrl: string;
  rating?: number;
  genres: string[];
}
