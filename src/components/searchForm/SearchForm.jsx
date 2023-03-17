import { useState } from 'react';

export const SearchForm = ({ onSubmit, placeholder }) => {
  const [searchInputValue, setSearchInputValue] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(searchInputValue);
    setSearchInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder={placeholder}
        value={searchInputValue}
        onChange={e => setSearchInputValue(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
