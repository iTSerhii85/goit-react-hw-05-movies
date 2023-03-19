import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/fetch';
import { MovieList } from 'components/movieList/MovieList';
import { Wrapper } from './Home.stile';

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    document.title = `Movie finder`;
    getTrendingMovies().then(data => setMovies(data));
  }, []);

  return (
    <>
      <Wrapper>
        <h1>Trending today</h1>
        {movies && <MovieList movies={movies} url={'movies/'} />}
      </Wrapper>
    </>
  );
};
export default HomePage;
