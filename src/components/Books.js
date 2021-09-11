import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

export default function Books(props) {
  const { books, remove } = props;
  return (
    <ul>
      {books.map((book) => <Book key={book.id} book={book} remove={remove} />)}
    </ul>
  );
}

Books.propTypes = {
  books: PropTypes.string.isRequired,
  remove: PropTypes.string.isRequired,
};
