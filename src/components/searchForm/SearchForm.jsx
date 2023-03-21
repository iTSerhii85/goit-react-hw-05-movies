import { useState } from 'react';
import { Button, Form, Input } from 'components/searchForm/SearchForm.style';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SearchForm = ({ onSubmit, placeholder }) => {
  const [searchInputValue, setSearchInputValue] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    if (searchInputValue === '') {
      toast.warn('Enter movie name!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
    onSubmit(searchInputValue);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder={placeholder === '' ? 'Enter movie name' : placeholder}
          value={searchInputValue}
          onChange={e => setSearchInputValue(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </Form>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};
