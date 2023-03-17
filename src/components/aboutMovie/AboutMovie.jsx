import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BackButton, Wrapper } from './AboutMovie.style';

export const AboutMovie = ({ movie }) => {
  const location = useLocation();
  const backLocation = useRef(location.state?.from ?? '/movies');
  return (
    <>
      <Link to={backLocation.current}>
        <BackButton>Go back</BackButton>
      </Link>
      <Wrapper>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={300}
          height={350}
        />
        <div>
          <h1>
            {movie.title} <span>({movie.release_date})</span>{' '}
          </h1>
          <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
        </div>
      </Wrapper>
    </>
  );
};
