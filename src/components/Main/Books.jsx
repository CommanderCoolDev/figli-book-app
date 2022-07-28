import Book from './Book';
import { CSVLink } from 'react-csv';

import { useState, useEffect } from 'react';

const Books = ({ books, setShelf, addToShelf }) => {
  const [csvData, setCsvData] = useState([]);
  const data = books.map(book => book.volumeInfo);
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
    setCsvData(data);
  }, []);

  return (
    <>
      <div className="csv-box">
        <CSVLink {...csvReport} separator=";" className="btn lime lighten-1">
          Export to CSV
        </CSVLink>
      </div>
      <div className="books">
        {books.map(book => (
          <Book
            key={book.id}
            book={book}
            setShelf={setShelf}
            addToShelf={addToShelf}
          />
        ))}
      </div>
    </>
  );
};
export default Books;
