import Image from 'next/image';
import styles from './MovieList.module.css';

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
}

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Últimos lançamentos</h1>

      <ul className={styles.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={styles.listItem}>
            {movie.poster_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                width={200}
                height={300}
                unoptimized={false}
              />
            ) : (
              <p>Sem imagem</p>
            )}

            <h2 className={styles.movieTitle}>{movie.title}</h2>
          </li>
        ))}
      </ul>
    </main>
  );
}

