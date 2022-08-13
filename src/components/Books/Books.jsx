import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CSVLink } from 'react-csv';
import { selectBooks } from '../../store/selectors/books-selector';
import Filter from '../Search/Filter';
import Spinner from '../Spinner/Spinner';

import Book from './Book';
import { toast } from 'react-toastify';

const Books = () => {
  const [csvData, setCsvData] = useState([]);
  const [booksByFilter, setBooksByFilter] = useState([]);

  const books = useSelector(selectBooks);

  const navigate = useNavigate();
  const data = books.map(book => book.volumeInfo);
  const filteredData = booksByFilter.map(book => book.volumeInfo);

  const headers = [
    { label: 'Name', key: 'title' },
    { label: 'Author', key: 'authors' },
    { label: 'Publisher', key: 'publisher' },
    { label: 'Published Date', key: 'publishedDate' },
    { label: 'Categories', key: 'categories' },
    { label: 'Page Count', key: 'pageCount' },
    { label: 'Description', key: 'description' },
  ];
  const csvReport = {
    filename: 'Report.csv',
    headers: headers,
    data: csvData,
  };

  useEffect(() => {
    if (books.length > 0) {
      toast(`I showed ${books.length} books`);
    }
  }, [books]);

  useEffect(() => {
    if (booksByFilter.length === 0) {
      setCsvData(data);
    } else {
      setCsvData(filteredData);
    }
  }, [booksByFilter, books]);

  return (
    <>
      <div className="container content" data-testid="Books">
        {booksByFilter.length > 0 ? (
          <>
            {!booksByFilter.length ? (
              <Spinner />
            ) : (
              <>
                <div className="csv-box">
                  <button
                    className="btn lime lighten-1 backBtn"
                    onClick={() => navigate(-1)}
                  >
                    Go Back
                  </button>
                  <CSVLink
                    {...csvReport}
                    separator=";"
                    className="btn lime lighten-1"
                  >
                    Export to CSV
                  </CSVLink>
                </div>
                <Filter
                  booksByFilter={booksByFilter}
                  setBooksByFilter={setBooksByFilter}
                />
                <div className="books">
                  {booksByFilter.map(book => (
                    <Book key={book.id} book={book} />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <>
            {!books.length ? (
              <Spinner />
            ) : (
              <>
                <div className="csv-box">
                  <button
                    className="btn lime lighten-1 backBtn"
                    onClick={() => navigate(-1)}
                  >
                    Go Back
                  </button>
                  <CSVLink
                    {...csvReport}
                    separator=";"
                    className="btn lime lighten-1"
                  >
                    Export to CSV
                  </CSVLink>
                </div>
                <Filter
                  booksByFilter={booksByFilter}
                  setBooksByFilter={setBooksByFilter}
                />
                <div className="books">
                  {books.map(book => (
                    <Book key={book.id} book={book} />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};
export default Books;
