import Book from './Book';
import Spinner from '../Spinner/Spinner';
import Hero from '../Hero/Hero';

import { useEffect } from 'react';

const Books = ({ books }) => {
  //   console.log(books);

  return (
    <div className="books">
      {books.length ? (
        books.map(book => <Book key={book.id} book={book} />)
      ) : (
        <Hero />
      )}
    </div>
  );
};
export default Books;
