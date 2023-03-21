import { AboutMovie } from 'components/aboutMovie/AboutMovie';
import { getMovieBiId } from 'services/fetch';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { LinkWrapper, Wrapper } from './MovieDetails.styled';
import ContentLoader from 'react-content-loader';
import { BiCaretDown } from 'react-icons/bi';

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
      {!movie ? (
        <ContentLoader
          speed={1}
          width={1240}
          height={380}
          viewBox="0 0 1240 380"
          backgroundColor="#e0eaff"
          foregroundColor="#ecebeb"
        >
          <rect x="243" y="48" rx="3" ry="3" width="225" height="15" />
          <rect x="247" y="139" rx="3" ry="3" width="285" height="10" />
          <rect x="8" y="12" rx="0" ry="0" width="216" height="354" />
          <rect x="248" y="198" rx="3" ry="3" width="150" height="15" />
          <rect x="246" y="116" rx="3" ry="3" width="285" height="10" />
          <rect x="247" y="279" rx="3" ry="3" width="285" height="10" />
          <rect x="246" y="259" rx="3" ry="3" width="285" height="10" />
          <rect x="247" y="238" rx="3" ry="3" width="285" height="10" />
        </ContentLoader>
      ) : (
        <AboutMovie movie={movie} />
      )}
      <Wrapper>
        <h3>Additional information:</h3>
        <LinkWrapper>
          <NavLink to="cast" style={setActive}>
            <BiCaretDown />
            Cast
          </NavLink>
          <NavLink to="reviews" style={setActive}>
            <BiCaretDown />
            Reviews
          </NavLink>
        </LinkWrapper>
      </Wrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default MovieDetails;
