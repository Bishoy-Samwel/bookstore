/* eslint-disable react/jsx-key */
import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, removeBook } from '../redux/books/books';

import Book from './Book';

const dispatch = useDispatch();

const submitBookToStore = (title, author) => {
  const newBook = {
    id: uuidv4(), // make sure it's unique
    title,
    author,
  };
  dispatch(addBook(newBook));
};

const removeBookFromStore = (id) => {
  dispatch(removeBook(id));
};

function books() {
  const books = useSelector((state) => state.counter, shallowEqual);

  return (
    <ul>
      {books.map((book) => <Book book={book} />)}
    </ul>
  );
}

export { books, submitBookToStore, removeBookFromStore };
