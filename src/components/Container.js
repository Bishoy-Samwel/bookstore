import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './NavBar';
import Categories from './Categories';
import Books from './Books';
import AddBookForm from './AddBookForm';
import { addBook, removeBook } from '../redux/books/books';

export default function Container() {
  const dispatch = useDispatch();

  const submitBookToStore = (book) => {
    const newBook = {
      id: uuidv4(), // make sure it's unique
      title: book.title,
      author: book.author,
    };
    dispatch(addBook(newBook));
  };

  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };

  const books = useSelector((state) => state.books, shallowEqual);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Books books={books} remove={removeBookFromStore} />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
      <AddBookForm add={submitBookToStore} />
    </>
  );
}
