// import { Link } from "react-router-dom"
import { SearchMovieList } from "components/SearchMovieList";
import { getMovies } from "fetch";
import { useState } from "react";

export const Movies =()=> {
    const [inputValue, setInputValue] = useState('');
    const [searchMovies, setSearchMovies] = useState('');

    const handleChange = (evt) => {
        setInputValue(evt.target.value.toLowerCase());
      };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (inputValue.trim() === "") {
            // toast.info('enter something!!!')
            return;
          };
          getMovies(inputValue).then(data => setSearchMovies(data)).then(console.log(searchMovies))
          .finally(setInputValue(''));
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  autoComplete="off"
                  autoFocus
                  placeholder="Search movies"
                  value={inputValue}
                  onChange = {handleChange} />
                <button type="submit">Search</button>
            </form>
            {searchMovies !=='' && <SearchMovieList movies={searchMovies}/>}
        </main>
    )
}