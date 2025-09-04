import Image from 'next/image';

interface ImageUrls {
  small: string;
  [key: string]: string;
}

export interface ImageItem {
  id: string;
  urls: ImageUrls;
}

interface ImageListProps {
  images: ImageItem[];
}

export default function ImageList({ images }: ImageListProps) {
  return (
    <>
      <div>Images</div>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <div key={image.id} style={{ textAlign: 'center' }}>
            <Image
              alt=''
              src={image.urls.small}
              width={150}
              height={150}
            />
          </div>
        ))}
      </div>
    </>
  );
}
