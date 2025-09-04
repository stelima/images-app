import React from 'react';
import ImageList from './components/ImageList/ImageList';

const API_KEY = 'l7UE_2KrGzTtJIY3Q9kzYygrIHUGTcL_9e86b0TB95k'

async function getLatestImages() {
  const res = await fetch(
    `https://api.unsplash.com/photos/?client_id=${API_KEY}`,

    { next: { revalidate: 60 * 60 } }
  );

  if (!res.ok) {
    throw new Error('Falha ao buscar filmes');
  }

  const data = await res.json();
  return data;
}


export default async function Home() {
  const images = await getLatestImages();
  console.log(images)
  return <ImageList images={images} />;
}
