import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { CSVLink } from 'react-csv';
import { selectBooks } from '../../store/selectors/books-selector';
import Book from './Book';

const Books = () => {
  const [csvData, setCsvData] = useState([]);
  const books = useSelector(selectBooks);
  const navigate = useNavigate();
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
        <button
          className="btn lime lighten-1 backBtn"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
        <CSVLink {...csvReport} separator=";" className="btn lime lighten-1">
          Export to CSV
        </CSVLink>
      </div>
      <div className="books">
        {books.map(book => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </>
  );
};
export default Books;
