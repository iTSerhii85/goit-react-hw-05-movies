import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Card, Ul } from './MovieList.style';
import image from 'img/no-image.jpg';

export const MovieList = ({ movies, url }) => {
  const location = useLocation();

  return (
    <Ul>
      {movies.map((movie, index) => (
        <Link to={`${url}${movie.id}`} key={index} state={{ from: location }}>
          <Card>
            <div>
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="movie.title"
                  width={180}
                  height={250}
                />
              ) : (
                <img src={image} alt={movie.title} width={180} height={250} />
              )}
              <div>
                <h3>{movie.title}</h3>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </Ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  url: PropTypes.string,
};
