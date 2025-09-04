import Image from 'next/image';
import styles from './ImageList.module.css';

interface ImageUrls {
  small: string;
  [key: string]: string;
}

export interface ImageItem {
  id: string;
  urls: ImageUrls;
  alt_description: string;
}

interface ImageListProps {
  images: ImageItem[];
}

export default function ImageList({ images }: ImageListProps) {
  return (
    <div className={styles.list}>
      {images.map((image) => (
        <div key={image.id} className={styles.item}>
          <Image
            alt={image.alt_description}
            src={image.urls.small}
            width={150}
            height={150}
          />
        </div>
      ))}
    </div>
  );
}
