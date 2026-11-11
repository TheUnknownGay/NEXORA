import MediaCarousel from '../components/media/MediaCarousel';
import { Media } from '../types/media';

const mockMedia: Media[] = [
  { id: '1', title: 'Inception', year: 2010, type: 'movie', posterUrl: 'https://picsum.photos/300/450?random=1', genres: ['Sci-Fi'] },
  { id: '2', title: 'Breaking Bad', year: 2008, type: 'tv', posterUrl: 'https://picsum.photos/300/450?random=2', genres: ['Drama'] },
  { id: '3', title: 'Attack on Titan', year: 2013, type: 'anime', posterUrl: 'https://picsum.photos/300/450?random=3', genres: ['Action'] },
];

export default function Home() {
  return (
    <div className="pt-8">
      {/* Hero Banner (à implémenter) */}
      <div className="mb-12 px-8 h-64 bg-zinc-800 rounded-2xl flex items-end p-8">
        <h1 className="text-4xl font-bold">Bienvenue sur NEXORA</h1>
      </div>
      
      <MediaCarousel title="Tendances" items={mockMedia} />
      <MediaCarousel title="Nouveautés" items={mockMedia} />
    </div>
  );
}
