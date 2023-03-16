import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'fetch';
import { MovieList } from 'components/movieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrendingMovies().then(data => setMovies(data));
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {movies && <MovieList movies={movies} url={'movies/'} />}
    </main>
  );
};
export default HomePage;
