import Image from 'next/image';
import styles from './MovieDetail.module.css';

interface Movie {
    poster_path?: string;
    title: string;
    release_date: string;
    vote_average: number;
    overview: string;
}

export default function MovieDetail({ movie }: { movie: Movie | null }) {
    if (!movie) return <p>Movie not found.</p>;

    return (
        <div className={styles.container}>
            {movie.poster_path && (
                <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width={300}
                    height={450}
                />
            )}
            <div>
                <h1>{movie.title}</h1>
                <p><strong>Lançamento:</strong> {movie.release_date}</p>
                <p><strong>Nota:</strong> {movie.vote_average}</p>
                <p>{movie.overview}</p>
            </div>
        </div>
    );
}
