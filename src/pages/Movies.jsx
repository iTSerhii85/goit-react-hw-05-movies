import { MovieList } from 'components/movieList/MovieList';
import { SearchForm } from 'components/searchForm/SearchForm';
import { getMovies } from 'fetch';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [inputValue, setInputValue] = useSearchParams('');
  const searchValue = inputValue.get('query') ?? '';
  const [searchMovies, setSearchMovies] = useState('');

  const updateQueryString = evt => {
    console.log(evt);
    const nextParams = evt !== '' ? { query: evt } : {};
    setInputValue(nextParams);
  };

  useEffect(() => {
    if (searchValue.trim() === '') {
      // toast.info('enter something!!!')
      return;
    }
    getMovies(searchValue.trim()).then(data => setSearchMovies(data));

    return function cleanUp() {
      getMovies(searchValue.trim());
    };
  }, [searchValue]);

  return (
    <main>
      <SearchForm onSubmit={updateQueryString} placeholder={searchValue} />
      {searchMovies !== '' && <MovieList movies={searchMovies} url={''} />}
    </main>
  );
};
export default MoviesPage;
