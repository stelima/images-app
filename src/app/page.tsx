import React from 'react';
import MovieList from './components/MovieList/MovieList';

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3';


async function getLatestMovies() {
  const res = await fetch(
    `${TMDB_API_BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&language=pt-BR&page=1`,
    { next: { revalidate: 60 * 60 } }
  );

  if (!res.ok) {
    throw new Error('Falha ao buscar filmes');
  }

  const data = await res.json();
  return data.results;
}


export default async function Home() {
  const movies = await getLatestMovies();
  console.log(movies)
  return <MovieList movies={movies} />;
}
