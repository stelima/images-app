import MovieDetail from '../../components/MovieDetail/MovieDetail';

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3';

async function getMovie(id: string) {
    const res = await fetch(
        `${TMDB_API_BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}&language=pt-BR`,
        { next: { revalidate: 60 * 60 } } // cache por 1 hora
    );

    if (!res.ok) {
        return null;
    }

    const data = await res.json();
    return data;
}

export default async function MoviePage({ params }) {
    const { id } = params;
    const movie = await getMovie(id);

    return <MovieDetail movie={movie} />;
}
