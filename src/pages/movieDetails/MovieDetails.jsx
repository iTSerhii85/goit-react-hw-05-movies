import { AboutMovie } from 'components/aboutMovie/AboutMovie';
import { getMovieBiId } from 'services/fetch';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { Wrapper } from './MovieDetails.styled';

const setActive = ({ isActive }) =>
  isActive
    ? { color: 'orange', borderBottom: '4px solid orange' }
    : { color: 'black' };

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    document.title = `About movie`;
    getMovieBiId(movieId).then(data => setMovie(data));

    return function cleanup() {
      getMovieBiId(movieId);
    };
  }, [movieId]);

  return (
    <main>
      {movie && <AboutMovie movie={movie} />}
      <Wrapper>
        <h3>Additional information:</h3>
        <NavLink to="cast" style={setActive}>
          Cast
        </NavLink>
        <NavLink to="reviews" style={setActive}>
          Reviews
        </NavLink>
      </Wrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default MovieDetails;
