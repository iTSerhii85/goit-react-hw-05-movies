import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ movies, url }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <Link
          to={`${url}${movie.id}`}
          key={movie.id}
          state={{ from: location }}
        >
          <li>
            <div>
              {/* <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie.title" width={180} height={250} /> */}
              <h3>{movie.title}</h3>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};
