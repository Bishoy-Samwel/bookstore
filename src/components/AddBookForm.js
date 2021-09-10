/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function Form(props) {
  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  const onChange = (e) => {
    if (book[e.target.name] !== e.target.value) {
      setBook({
        ...book,
        [e.target.name]: e.target.value,
      });
    }
  };

  const { add } = props;

  return (
    <form>
      <input onChange={onChange} type="text" name="title" placeholder="Title" />
      <input onChange={onChange} type="text" name="author" placeholder="Author" />
      <button type="button" onClick={() => add(book)}>Add Book</button>
    </form>
  );
}
