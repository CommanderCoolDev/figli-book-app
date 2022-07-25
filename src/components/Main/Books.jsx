import Book from './Book';
import Spinner from '../Spinner/Spinner';
import Hero from '../Hero/Hero';

import { useEffect } from 'react';

const Books = ({ books }) => {
  //   console.log(books);

  return (
    <div className="books">
      {books.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};
export default Books;
