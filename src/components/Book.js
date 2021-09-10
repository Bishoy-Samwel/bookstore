/* eslint-disable react/prop-types */
import React from 'react';

export default function Book(props) {
  const { book, remove } = props;
  return (
    <li key={book.id}>
      {book.category}
      {book.title}
      {book.author}
      <button type="button">Comments</button>
      <button type="button" onClick={() => remove(book.id)}>Remove</button>
      <button type="button">Edit</button>
    </li>
  );
}
