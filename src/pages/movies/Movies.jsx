import { MovieList } from 'components/movieList/MovieList';
import { SearchForm } from 'components/searchForm/SearchForm';
import { getMovies } from 'services/fetch';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [inputValue, setInputValue] = useSearchParams('');
  const searchValue = inputValue.get('query') ?? '';
  const [searchMovies, setSearchMovies] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [fetched, setFetched] = useState(true);
  const [loading, setLoading] = useState(false);

  const updateQueryString = evt => {
    const nextParams = evt !== '' ? { query: evt } : {};
    setInputValue(nextParams);
  };

  useEffect(() => {
    if (searchValue === '') {
      return;
    }
    if (fetched && totalPages >= currentPage) {
      setLoading(true);
      getMovies(searchValue.trim(), currentPage)
        .then(data => {
          setSearchMovies(prevState => [...prevState, ...data.results]);
          setTotalPages(data.total_pages);
        })
        .then(setCurrentPage(prevState => prevState + 1))
        .finally(setFetched(false));
      setLoading(false);
    }
  }, [currentPage, fetched, searchValue, totalPages]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = e => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      50
    ) {
      setFetched(true);
    }
  };

  return (
    <main>
      <SearchForm onSubmit={updateQueryString} placeholder={searchValue} />
      {loading && <div>Loading...</div>}
      {searchMovies !== '' && <MovieList movies={searchMovies} url={''} />}
    </main>
  );
};
export default MoviesPage;
