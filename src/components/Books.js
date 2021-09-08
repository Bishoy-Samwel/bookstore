/* eslint-disable react/jsx-key */
import React from 'react';
import Book from './Book';

export default function User() {
  const books = [
    {
      id: 1, name: 'book1', category: 'cat1', author: 'auth1',
    },
    {
      id: 2, name: 'book2', category: 'cat2', author: 'auth2',
    },
  ];

  return (
    <ul>
      {books.map((book) => <Book book={book} />)}
    </ul>
  );
}
