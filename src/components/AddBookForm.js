import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function AddBookForm(props) {
  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  const onChange = (e) => {
    console.log('hey');
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const { add } = props;
  const emptyFields = () => {
    const fields = document.querySelectorAll('.add-form input');
    fields.forEach((field) => {
      // eslint-disable-next-line no-param-reassign
      field.value = '';
    });
  };
  const handleAddBook = () => {
    if (book.title && book.author) {
      add(book);
      emptyFields();
    } else {
      alert('Please complete empty fields!!');
    }
  };

  return (
    <form className="add-form">
      <input onChange={onChange} type="text" name="title" placeholder="Title" />
      <input onChange={onChange} type="text" name="author" placeholder="Author" />
      <button type="button" onClick={handleAddBook}>Add Book</button>
    </form>
  );
}

AddBookForm.propTypes = {
  add: PropTypes.isRequired,
};
