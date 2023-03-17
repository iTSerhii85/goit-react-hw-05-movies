import { AboutMovie } from 'components/aboutMovie/AboutMovie';
import { getMovieBiId } from 'fetch';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { Wrapper } from './MovieDetails.styled';

const setActive = ({ isActive }) =>
  isActive ? { color: 'orange' } : { color: 'black' };

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieBiId(movieId).then(data => setMovie(data));

    return function cleanup() {
      getMovieBiId(movieId);
    };
  }, [movieId]);

  return (
    <>
      {movie && <AboutMovie movie={movie} />}
      <Wrapper>
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
    </>
  );
};
export default MovieDetails;
