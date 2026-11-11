import { useState, useMemo } from 'react';
import { catalogData, DetailedMedia } from '../services/catalogService';
import MediaCard from '../components/media/MediaCard';

export default function CatalogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const genres = useMemo(() => {
    const allGenres = catalogData.flatMap((item: DetailedMedia) => item.genres);
    return Array.from(new Set(allGenres));
  }, []);

  const filteredMedia = useMemo(() => {
    return catalogData.filter((item: DetailedMedia) => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = selectedGenre ? item.genres.includes(selectedGenre) : true;
      return matchesSearch && matchesGenre;
    });
  }, [searchTerm, selectedGenre]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Catalogue</h1>
      
      <div className="flex gap-4 mb-8">
        <input
          type="text"
          placeholder="Rechercher un titre..."
          className="bg-zinc-900 border border-zinc-800 p-2 rounded-lg text-white w-64"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="bg-zinc-900 border border-zinc-800 p-2 rounded-lg text-white"
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="">Tous les genres</option>
          {genres.map((genre: string) => <option key={genre} value={genre}>{genre}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredMedia.map((item: DetailedMedia) => (
          <MediaCard key={item.id} media={item} />
        ))}
      </div>
    </div>
  );
}
