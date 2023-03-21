import { MovieList } from 'components/movieList/MovieList';
import { SearchForm } from 'components/searchForm/SearchForm';
import { getMovies } from 'services/fetch';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/loader/Loader';

const MoviesPage = () => {
  const [inputValue, setInputValue] = useSearchParams('');
  const searchValue = inputValue.get('query') ?? '';
  const [searchMovies, setSearchMovies] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const updateQueryString = evt => {
    const nextParams = evt !== '' ? { query: evt } : {};
    setInputValue(nextParams);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (searchValue === '') {
      return;
    }

    if (currentPage === 1) {
      window.scrollTo(0, 0);
      setLoading(true);
      getMovies(searchValue.trim(), currentPage)
        .then(data => {
          setSearchMovies(data.results);
          setTotalPages(data.total_pages);
        })
        .then(setLoading(false));
    }

    if (totalPages >= currentPage) {
      setLoading(true);
      getMovies(searchValue.trim(), currentPage).then(data => {
        setSearchMovies(prevState => [...prevState, ...data.results]);
      });
      setLoading(false);
    }
  }, [currentPage, searchValue, totalPages]);

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
      setCurrentPage(prevState => prevState + 1);
    }
  };

  return (
    <main>
      <SearchForm onSubmit={updateQueryString} placeholder={searchValue} />
      {loading && <Loader />}
      {searchMovies !== '' && <MovieList movies={searchMovies} url={''} />}
    </main>
  );
};
export default MoviesPage;
