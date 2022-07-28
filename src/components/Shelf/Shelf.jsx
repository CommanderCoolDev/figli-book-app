import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import ShelfItem from './ShelfItem';

const Shelf = ({ shelf, setShelf }) => {
  const [csvShelfData, setCsvShelfData] = useState([]);
  const data = shelf.map(shelf => shelf.volumeInfo);
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
    data: csvShelfData,
  };
  const navigate = useNavigate();
  useEffect(() => {
    setCsvShelfData(data);
  }, []);
  if (!shelf.length) {
    return <h3>Nothing to show</h3>;
  }

  return (
    <div className="container content">
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
        {shelf.map(shelfItem => (
          <ShelfItem
            key={shelfItem.id}
            shelfItem={shelfItem}
            setShelf={setShelf}
            shelf={shelf}
          />
        ))}
      </div>
    </div>
  );
};

export default Shelf;
