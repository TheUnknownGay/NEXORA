import { Media } from '../../types/media';
import MediaCard from './MediaCard';

interface MediaCarouselProps {
  title: string;
  items: Media[];
}

export default function MediaCarousel({ title, items }: MediaCarouselProps) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 px-8 text-2xl font-bold text-white">{title}</h2>
      <div className="flex gap-4 overflow-x-auto px-8 pb-4 scrollbar-hide">
        {items.map((item) => (
          <MediaCard key={item.id} media={item} />
        ))}
      </div>
    </section>
  );
}
