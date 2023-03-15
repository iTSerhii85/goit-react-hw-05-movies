import { MovieList } from 'components/movieList/MovieList';
import { getMovies } from 'fetch';
import { useState } from 'react';

export const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchMovies, setSearchMovies] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    if (inputValue.trim() === '') {
      // toast.info('enter something!!!')
      return;
    }
    getMovies(inputValue)
      .then(data => setSearchMovies(data))
      .finally(setInputValue(''));
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={inputValue}
          onChange={evt => setInputValue(evt.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {searchMovies !== '' && <MovieList movies={searchMovies} url={''} />}
    </main>
  );
};
