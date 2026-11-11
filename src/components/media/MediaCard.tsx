import { Media } from '../../types/media';

interface MediaCardProps {
  media: Media;
}

export default function MediaCard({ media }: MediaCardProps) {
  return (
    <div className="group relative w-48 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl bg-zinc-900 transition-transform duration-300 hover:scale-105">
      <img
        src={media.posterUrl}
        alt={media.title}
        className="h-72 w-full object-cover transition-opacity duration-300 group-hover:opacity-60"
        loading="lazy"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-lg font-bold text-white line-clamp-2">{media.title}</h3>
        <p className="text-sm text-zinc-300">{media.year}</p>
        <span className="mt-2 inline-block rounded-full bg-red-600 px-2 py-0.5 text-xs text-white">
          {media.type.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
