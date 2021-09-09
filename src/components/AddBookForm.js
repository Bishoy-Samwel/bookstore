import React from 'react';
import { submitBookToStore } from './Books';

const AddBookForm = () => (
  <form>
    <input type="text" name="Title" placeholder="Title" />
    <input type="text" name="Author" placeholder="Author" />
    <button type="button" onClick={submitBookToStore}>Add Book</button>
  </form>
);

export default AddBookForm;
