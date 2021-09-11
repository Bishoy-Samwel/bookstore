import React from 'react';
import PropTypes from 'prop-types';

export default function Book(props) {
  const { book, remove } = props;
  return (
    <li>
      {book.category}
      {book.title}
      {book.author}
      <button type="button">Comments</button>
      <button type="button" onClick={() => remove(book.id)}>Remove</button>
      <button type="button">Edit</button>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.isRequired,
  remove: PropTypes.isRequired,
};
