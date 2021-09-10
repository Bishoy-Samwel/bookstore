/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import Book from './Book';

export default function Books(props) {
  const { books, remove } = props;
  return (
    <ul>
      {books.map((book) => <Book book={book} remove={remove} />)}
    </ul>
  );
}
