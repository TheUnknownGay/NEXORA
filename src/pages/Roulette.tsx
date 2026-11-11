import { useState } from 'react';
import { catalogData } from '../services/catalogService';
import MediaCard from '../components/media/MediaCard';

export default function RoulettePage() {
  const [suggestion, setSuggestion] = useState(catalogData[0]);

  const spin = () => {
    const randomIndex = Math.floor(Math.random() * catalogData.length);
    setSuggestion(catalogData[randomIndex]);
  };

  return (
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">NEXORA Roulette</h1>
      <button 
        onClick={spin}
        className="mb-8 px-6 py-3 bg-red-600 rounded-xl font-bold hover:bg-red-700 transition"
      >
        Lancer la Roulette
      </button>
      
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl font-semibold">Votre suggestion :</h2>
        <MediaCard media={suggestion} />
      </div>
    </div>
  );
}
