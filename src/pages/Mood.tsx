import { useState } from 'react';
import { catalogData, DetailedMedia } from '../services/catalogService';
import MediaCard from '../components/media/MediaCard';

export default function MoodPage() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods = [
    { label: 'Je veux rire (Comédie)', genre: 'Comedy' },
    { label: 'Je veux du suspense (Thriller)', genre: 'Thriller' },
    { label: 'Je veux du voyage / Sci-Fi', genre: 'Sci-Fi' },
    { label: 'Je veux de l action', genre: 'Action' }
  ];

  const filtered = selectedMood 
    ? catalogData.filter((item: DetailedMedia) => item.genres.includes(selectedMood))
    : [];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">NEXORA Mood</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {moods.map((mood) => (
          <button
            key={mood.genre}
            onClick={() => setSelectedMood(mood.genre)}
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-red-600 transition font-semibold"
          >
            {mood.label}
          </button>
        ))}
      </div>

      {selectedMood && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Résultats pour votre humeur :</h2>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {filtered.length > 0 ? (
              filtered.map((item: DetailedMedia) => <MediaCard key={item.id} media={item} />)
            ) : (
              <p className="text-zinc-400">Aucun contenu trouvé pour cette humeur dans le catalogue de démonstration.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
