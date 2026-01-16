import Image from 'next/image';

type GridImage = {
  src: string;
  alt: string;
  caption?: string;
};

export default function ImageGrid({
  images,
  columns = 2,
}: {
  images: GridImage[];
  columns?: 2 | 3;
}) {
  const gridCols = columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';

  return (
    <div className="my-10">
      <div className={`grid gap-4 ${gridCols}`}>
        {images.map((img) => (
          <figure key={img.src} className="overflow-hidden rounded-2xl border border-border/60 bg-card/40 shadow-soft">
            <div className="relative aspect-video">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <figcaption className="px-4 py-3 text-sm text-muted-foreground">
              {img.caption ?? img.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
